const slogans = [
  'Kết nối đúng người',
  'Đồng hành đúng nhu cầu',
  'Phát triển bền vững',
];

const messages = [...slogans, ...slogans];

export function BrandMarquee() {
  return (
    <div className="ttv-marquee border-y border-slate-700 bg-slate-900 text-white" aria-label="Thông điệp Tri Thức Việt">
      <p className="sr-only">{slogans.join(' — ')}</p>
      <div className="ttv-marquee-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div key={copy} className="ttv-marquee-group">
            {messages.map((message, index) => (
              <span key={`${copy}-${index}`} className="ttv-marquee-item">
                <span className="ttv-marquee-node" />
                {message}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
