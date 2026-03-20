"""
Verify aitutorials.com.au ownership in Google Search Console.

Step 1: Run with --get-token to get the verification HTML file
Step 2: Deploy the site (push to main)
Step 3: Run with --verify to complete verification

Usage:
  python scripts/verify_gsc.py --get-token
  python scripts/verify_gsc.py --verify
"""

import argparse
import json
import os
import sys

from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from googleapiclient.discovery import build

CREDS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'credentials')
TOKEN_FILE = os.path.join(CREDS_DIR, 'token.json')
PUBLIC_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public')
SITE_URL = 'https://aitutorials.com.au/'

SCOPES = [
    'https://www.googleapis.com/auth/siteverification',
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

    return creds


def get_token():
    creds = get_credentials()
    service = build('siteVerification', 'v1', credentials=creds)

    body = {
        'site': {
            'type': 'SITE',
            'identifier': SITE_URL,
        },
        'verificationMethod': 'FILE',
    }

    result = service.webResource().getToken(body=body).execute()
    token = result.get('token')

    if not token:
        print("Failed to get verification token.")
        print(json.dumps(result, indent=2))
        sys.exit(1)

    # Write the verification file to public/
    file_path = os.path.join(PUBLIC_DIR, token)
    with open(file_path, 'w') as f:
        f.write(f'google-site-verification: {token}')

    print(f"Verification file created: public/{token}")
    print()
    print("Next steps:")
    print("  1. Build and deploy the site (push to main)")
    print(f"  2. Verify the file is live: {SITE_URL}{token}")
    print("  3. Run: python scripts/verify_gsc.py --verify")


def verify():
    creds = get_credentials()
    service = build('siteVerification', 'v1', credentials=creds)

    body = {
        'site': {
            'type': 'SITE',
            'identifier': SITE_URL,
        },
    }

    try:
        result = service.webResource().insert(verificationMethod='FILE', body=body).execute()
        print("Verification successful!")
        print(json.dumps(result, indent=2))
    except Exception as e:
        print(f"Verification failed: {e}")
        print()
        print("Make sure the verification file is deployed and accessible.")
        sys.exit(1)


def main():
    parser = argparse.ArgumentParser(description='Verify GSC ownership')
    parser.add_argument('--get-token', action='store_true', help='Get verification token and create HTML file')
    parser.add_argument('--verify', action='store_true', help='Complete verification after deployment')
    args = parser.parse_args()

    if args.get_token:
        get_token()
    elif args.verify:
        verify()
    else:
        parser.print_help()


if __name__ == '__main__':
    main()
