const updates = [
  { label: 'Tư vấn việc làm miễn phí cho người lao động' },
  { label: 'Làm rõ lương, phụ cấp và ca làm trước khi nhận việc' },
  { label: 'Hỗ trợ xe đưa đón, chỗ ở theo từng chương trình' },
];

export function BrandMarquee() {
  return (
    <div className="ttv-marquee border-y border-slate-700 bg-slate-900 text-white" aria-label="Bản tin tuyển dụng và hỗ trợ">
      <p className="sr-only">{updates.map(update => update.label).join(' — ')}</p>
      <div className="ttv-marquee-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div key={copy} className="ttv-marquee-group" aria-hidden={copy === 1 ? true : undefined}>
            {updates.map((update, index) => (
              <span key={`${copy}-${index}`} className="ttv-marquee-item">
                <span className="ttv-marquee-node" aria-hidden="true" />
                {update.label}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
