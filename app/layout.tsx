import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Git Room Main',
    default: 'Git Room Main',
  },
  description: 'GitRoom MainPage.',
  metadataBase: new URL('https://Git-room.vercel'),
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}

export default RootLayout;