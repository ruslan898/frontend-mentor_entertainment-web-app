import ContentGrid from '../components/ui/contentGrid/ContentGrid';

export default function Homepage() {
  return (
    <>
      <ContentGrid variant="trending" />
      <ContentGrid />
    </>
  );
}
