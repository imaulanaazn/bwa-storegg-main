import ReachedStats from '../../molecules/ReachedStats';

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedStats isRightBorder stats={290} unit="M+" title="Players Top Up" />
          <ReachedStats isRightBorder stats={12.500} title="Games Available" />
          <ReachedStats isRightBorder stats={99.9} unit="%" title="Happy Players" />
          <ReachedStats stats={4.7} title="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
