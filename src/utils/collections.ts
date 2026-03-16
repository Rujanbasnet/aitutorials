import { getCollection } from 'astro:content';

export async function getPublishedTutorials() {
  const entries = await getCollection('tutorials', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPublishedNews() {
  const entries = await getCollection('news', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPublishedBlog() {
  const entries = await getCollection('blog', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPublishedNonCoder() {
  const entries = await getCollection('nonCoder', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPublishedProducts() {
  const entries = await getCollection('products', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPublishedResources() {
  const entries = await getCollection('resources', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

import learningPathsData from '@data/learning-paths.json';

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  icon: string;
  color: string;
  colorSoft: string;
  steps: string[];
  stepCount: number;
  totalTime: string;
}

export function getLearningPaths(): LearningPath[] {
  return learningPathsData.map((path) => ({
    ...path,
    stepCount: path.steps.length,
    totalTime: '', // computed at page level with actual tutorial data
  }));
}

export async function getLearningPathsWithTime(): Promise<LearningPath[]> {
  const tutorials = await getPublishedTutorials();
  return learningPathsData.map((path) => {
    let totalMinutes = 0;
    for (const stepId of path.steps) {
      const tutorial = tutorials.find((t) => t.id === stepId);
      if (tutorial?.data.estimatedTime) {
        const mins = parseInt(tutorial.data.estimatedTime, 10);
        if (!isNaN(mins)) totalMinutes += mins;
      }
    }
    return {
      ...path,
      stepCount: path.steps.length,
      totalTime: totalMinutes > 0 ? `${totalMinutes} min` : '',
    };
  });
}

export async function getTutorialsForPath(pathId: string) {
  const tutorials = await getPublishedTutorials();
  const path = learningPathsData.find((p) => p.id === pathId);
  if (!path) return [];
  return path.steps
    .map((stepId) => tutorials.find((t) => t.id === stepId))
    .filter(Boolean);
}

export async function getPublishedChallenges() {
  const difficultyOrder: Record<string, number> = { beginner: 0, intermediate: 1, advanced: 2 };
  const entries = await getCollection('challenges', ({ data }) => !data.draft);
  return entries.sort((a, b) => {
    const da = difficultyOrder[a.data.difficulty] ?? 1;
    const db = difficultyOrder[b.data.difficulty] ?? 1;
    if (da !== db) return da - db;
    return a.data.title.localeCompare(b.data.title);
  });
}

export async function getAllTags(): Promise<string[]> {
  const [tutorials, news, blog, nonCoder, resources] = await Promise.all([
    getPublishedTutorials(),
    getPublishedNews(),
    getPublishedBlog(),
    getPublishedNonCoder(),
    getPublishedResources(),
  ]);
  const allTags = new Set<string>();
  [...tutorials, ...news, ...blog, ...nonCoder, ...resources].forEach((entry) => {
    entry.data.tags.forEach((tag) => allTags.add(tag));
  });
  return [...allTags].sort();
}
