import { DESTINATIONS, type DestinationSlug } from '../content/destinations';
import { SERVICES, type ServiceSlug } from '../content/services';
import { EXPERIENCES, type ExperienceSlug } from '../content/experiences';

const EXPERIENCE_LABELS = Object.fromEntries(
  Object.values(EXPERIENCES).map((e) => [e.slug, e.title])
) as Record<string, string>;

export const PROJECT_LABELS = {
  'akagera-lions': "Akagera Lion Reintroduction",
  'kivu-coffee': "The Kivu Coffee Circuit",
  'gorilla-vet': "Mountain Gorilla Vet Project",
  'nyamirambo-solar': "Nyamirambo Solar Initiative",
  'kivu-wedding': "A Lake Kivu Wedding",
  'charity-gala': "Kigali Charity Gala",
  'corporate-summit': "East Africa Corporate Summit",
} as const;

export type ProjectSlug = keyof typeof PROJECT_LABELS;

export const NAME_MAP = {
  destinations: Object.fromEntries(
    Object.entries(DESTINATIONS).map(([slug, d]) => [slug, d.title])
  ) as Record<DestinationSlug, string>,
  services: Object.fromEntries(
    Object.entries(SERVICES).map(([slug, s]) => [slug, s.title])
  ) as Record<ServiceSlug, string>,
  experiences: EXPERIENCE_LABELS as Record<ExperienceSlug, string>,
  projects: PROJECT_LABELS as Record<ProjectSlug, string>,
};

export type RelationKind = keyof typeof NAME_MAP;

export const relationLabel = (kind: RelationKind, slug: string): string =>
  (NAME_MAP[kind] as Record<string, string>)[slug] ?? slug;

export const relationPath = (kind: RelationKind, slug: string): string =>
  `/${kind === 'projects' ? 'portfolio' : kind}/${slug}`;