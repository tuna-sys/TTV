import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = 'Tri Thức Việt – Kết nối đúng nhu cầu';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 82px',
          background: 'linear-gradient(135deg, #07152c 0%, #123a70 60%, #0d7492 120%)',
          color: 'white',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 60, height: 60, borderRadius: 16, border: '1px solid rgba(255,255,255,.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 21, fontWeight: 800 }}>TV</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 27, fontWeight: 800 }}>TRI THUC VIET</span>
            <span style={{ marginTop: 5, fontSize: 15, color: '#b9d4ee', letterSpacing: 2 }}>CUNG UNG NHAN LUC & TUYEN NHAN VIEN</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 920 }}>
          <span style={{ fontSize: 67, lineHeight: 1.05, fontWeight: 800, letterSpacing: -2 }}>KET NOI DUNG NHU CAU. THONG TIN CO THE KIEM CHUNG.</span>
          <span style={{ marginTop: 24, fontSize: 25, lineHeight: 1.4, color: '#d5e7f7' }}>Website tuyen dung va hop tac doanh nghiep cua Tri Thuc Viet.</span>
        </div>
      </div>
    ),
    size,
  );
}
