declare module 'near-social-vm';

declare module 'nanoid' {
  export function nanoid(size?: number): string;
}

interface Window {
  zE: (name: string, method: string) => void | undefined;
}

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
