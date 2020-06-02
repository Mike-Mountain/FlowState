export interface Theme {
  id: string;
  title: string;
  description: string;
  primary: string;
  accent: string;
  success: string;
  info: string;
  warning: string;
  danger: string;
}

export function createTheme(params?: Partial<Theme>) {
  return {
    id: params?.id,
    title: params?.title,
    description: params?.description,
    primary: params?.primary,
    accent: params?.accent,
    success: params?.success,
    info: params?.info,
    warning: params?.warning,
    danger: params?.danger
  } as Theme;
}
