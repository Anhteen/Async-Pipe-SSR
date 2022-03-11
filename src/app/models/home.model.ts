export interface MenuItem {
  title: string;
  router: string[] | null;
  icon?: { name: string };
}

export interface DurationExpired {
  label?: string;
  value?: string | number;
}

export type ViewMode = 'grid' | 'list' | 'related';
