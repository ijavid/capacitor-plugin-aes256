export interface AES256Plugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
