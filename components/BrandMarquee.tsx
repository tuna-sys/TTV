const messages = [
  'Kết nối đúng người',
  'Đồng hành đúng nhu cầu',
  'Phát triển bền vững',
  'Giải pháp doanh nghiệp',
  'Hỗ trợ người lao động',
  'Năng lực tuyển dụng',
];

export function BrandMarquee() {
  return (
    <div className="ttv-marquee border-t border-slate-200 bg-slate-950 text-white" aria-label="Thông điệp Tri Thức Việt">
      <p className="sr-only">{messages.join(' — ')}</p>
      <div className="ttv-marquee-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div key={copy} className="ttv-marquee-group">
            {messages.map((message) => (
              <span key={`${copy}-${message}`} className="ttv-marquee-item">
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
