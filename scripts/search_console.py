"""
Search Console analytics for aitutorials.com.au
Pulls impressions, clicks, CTR, position data from Google Search Console.

Usage: python scripts/search_console.py [--days 7] [--top 20]
"""

import argparse
import json
import os
import sys
from datetime import datetime, timedelta

from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from googleapiclient.discovery import build

CREDS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'credentials')
TOKEN_FILE = os.path.join(CREDS_DIR, 'token.json')
SITE_URL = 'sc-domain:aitutorials.com.au'

SCOPES = [
    'https://www.googleapis.com/auth/webmasters.readonly',
]


def get_credentials():
    if not os.path.exists(TOKEN_FILE):
        print(f"No token found at {TOKEN_FILE}")
        print("Run: python credentials/auth_setup.py")
        sys.exit(1)

    creds = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)

    if creds.expired and creds.refresh_token:
        print("Refreshing expired token...")
        creds.refresh(Request())
        with open(TOKEN_FILE, 'w') as f:
            f.write(creds.to_json())
        print("Token refreshed.\n")

    return creds


def query_search_console(service, start_date, end_date, dimensions, row_limit=25):
    body = {
        'startDate': start_date,
        'endDate': end_date,
        'dimensions': dimensions,
        'rowLimit': row_limit,
    }
    return service.searchanalytics().query(siteUrl=SITE_URL, body=body).execute()


def print_summary(service, start_date, end_date):
    # Overall totals
    body = {
        'startDate': start_date,
        'endDate': end_date,
    }
    result = service.searchanalytics().query(siteUrl=SITE_URL, body=body).execute()
    rows = result.get('rows', [])

    if not rows:
        print("No data for this period.")
        return

    r = rows[0]
    print("=" * 60)
    print(f"  SEARCH CONSOLE — {start_date} to {end_date}")
    print("=" * 60)
    print(f"  Clicks:       {r['clicks']:.0f}")
    print(f"  Impressions:  {r['impressions']:.0f}")
    print(f"  CTR:          {r['ctr']:.1%}")
    print(f"  Avg Position: {r['position']:.1f}")
    print("=" * 60)


def print_table(title, data, key_label, key_width=50):
    if not data.get('rows'):
        print(f"\n{title}: No data\n")
        return

    print(f"\n{title}")
    print("-" * 60)
    header = f"  {'#':>3}  {key_label:<{key_width}}  {'Clicks':>6}  {'Impr':>6}  {'CTR':>6}  {'Pos':>5}"
    print(header)
    print("-" * 60)

    for i, row in enumerate(data['rows'], 1):
        key = row['keys'][0]
        if len(key) > key_width:
            key = key[:key_width - 3] + '...'
        clicks = row['clicks']
        impressions = row['impressions']
        ctr = row['ctr']
        position = row['position']
        print(f"  {i:>3}  {key:<{key_width}}  {clicks:>6.0f}  {impressions:>6.0f}  {ctr:>5.1%}  {position:>5.1f}")

    print()


def print_daily(data):
    if not data.get('rows'):
        print("\nDaily breakdown: No data\n")
        return

    print("\nDAILY BREAKDOWN")
    print("-" * 50)
    print(f"  {'Date':<12}  {'Clicks':>6}  {'Impr':>6}  {'CTR':>6}  {'Pos':>5}")
    print("-" * 50)

    for row in data['rows']:
        date = row['keys'][0]
        print(f"  {date:<12}  {row['clicks']:>6.0f}  {row['impressions']:>6.0f}  {row['ctr']:>5.1%}  {row['position']:>5.1f}")

    print()


def main():
    parser = argparse.ArgumentParser(description='Search Console analytics')
    parser.add_argument('--days', type=int, default=7, help='Number of days to look back (default: 7)')
    parser.add_argument('--top', type=int, default=20, help='Number of top results to show (default: 20)')
    args = parser.parse_args()

    end_date = (datetime.now() - timedelta(days=1)).strftime('%Y-%m-%d')  # yesterday (today's data not ready)
    start_date = (datetime.now() - timedelta(days=args.days)).strftime('%Y-%m-%d')

    creds = get_credentials()
    service = build('searchconsole', 'v1', credentials=creds)

    # Summary
    print_summary(service, start_date, end_date)

    # Top queries
    queries = query_search_console(service, start_date, end_date, ['query'], args.top)
    print_table("TOP QUERIES", queries, "Query", 45)

    # Top pages
    pages = query_search_console(service, start_date, end_date, ['page'], args.top)
    print_table("TOP PAGES", pages, "Page", 55)

    # Daily breakdown
    daily = query_search_console(service, start_date, end_date, ['date'], args.days)
    print_daily(daily)

    # Top countries
    countries = query_search_console(service, start_date, end_date, ['country'], 10)
    print_table("TOP COUNTRIES", countries, "Country", 20)


if __name__ == '__main__':
    main()
