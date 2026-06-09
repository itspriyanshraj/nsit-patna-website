export const metadata = {
  title: "Teachers Feedback | NSIT Patna",
};

const inputStyle = {
  width: '100%', minHeight: 48, padding: '0 16px',
  border: '1px solid #ddd', borderRadius: 8,
  font: 'inherit', fontSize: 14, fontWeight: 500,
  color: '#333', background: '#fff', boxSizing: 'border-box',
};

const labelStyle = {
  fontSize: 13, fontWeight: 950, color: '#14213d',
  marginBottom: 6, display: 'block',
};

export default function TeacherFeedbackPage() {
  return (
    <main>
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, rgba(247,32,57,0.08), transparent 42%), linear-gradient(180deg, #ffffff 0%, #f6f8fb 100%)', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ position: 'relative', zIndex: 1, width: 'min(1320px, calc(100% - 48px))', margin: '0 auto', padding: '42px 0 48px' }}>
          <h1 className="mb-2" style={{ maxWidth: 900, margin: '14px 0 0', color: '#071225', fontSize: 'clamp(38px, 5vw, 64px)', lineHeight: 1.02 }}>Teachers Feedback</h1>
        </div>
      </section>

      <section style={{ width: 'min(800px, calc(100% - 48px))', margin: '0 auto', padding: '76px 0 92px' }}>
        <a href="/feedback" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--main-color)', fontSize: 13, fontWeight: 950, textTransform: 'uppercase', letterSpacing: '0.05em', textDecoration: 'none', marginBottom: 24 }}>
          <span style={{ fontSize: 16 }}>←</span> Back to Feedback Types
        </a>
        <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: 12, padding: 'clamp(28px,3.5vw,44px)', boxShadow: '0 18px 42px rgba(23,32,51,0.08)' }}>
          <div style={{marginBottom:28}}>
            <span style={{color:'var(--main-color)', fontSize:12, fontWeight:950, letterSpacing:'0.08em', textTransform:'uppercase'}}>Share Your Thoughts</span>
            <h2 style={{margin:'6px 0 0', color:'#14213d', fontSize:'clamp(22px,2.8vw,32px)'}}>Teachers Feedback Form</h2>
            <p style={{margin:'10px 0 0', color:'#888', fontSize:14, fontWeight:500, lineHeight:1.6}}>
              We value your opinion. Share your thoughts, suggestions, or concerns with us.
            </p>
          </div>

          <form action="mailto:info@nsit.in" method="post" encType="text/plain" style={{ display: 'grid', gap: 18 }}>
            <input type="hidden" name="Feedback Type" value="Teacher" />
            <div className="row" style={{ gap: 18 }}>
              <div className="col-md-6" style={{ padding: 0 }}>
                <label style={labelStyle} htmlFor="name">Name</label>
                <input type="text" id="name" name="Name" style={inputStyle} placeholder="Your full name" required />
              </div>
              <div className="col-md-6" style={{ padding: 0 }}>
                <label style={labelStyle} htmlFor="email">Email</label>
                <input type="email" id="email" name="Email" style={inputStyle} placeholder="your@email.com" required />
              </div>
            </div>
            <div className="row" style={{ gap: 18 }}>
              <div className="col-md-6" style={{ padding: 0 }}>
                <label style={labelStyle} htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="Phone" style={inputStyle} placeholder="Your phone number" />
              </div>
              <div className="col-md-6" style={{ padding: 0 }}>
                <label style={labelStyle} htmlFor="dept">Department</label>
                <input type="text" id="dept" name="Department" style={inputStyle} placeholder="Your department" />
              </div>
            </div>
            <div>
              <label style={labelStyle} htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="Subject" style={inputStyle} placeholder="Subject of your feedback" />
            </div>
            <div>
              <label style={labelStyle} htmlFor="message">Message</label>
              <textarea id="message" name="Message" style={{ ...inputStyle, padding: '12px 16px', resize: 'vertical', minHeight: 130 }} placeholder="Write your feedback here..." required />
            </div>
            <div style={{ marginTop: 6 }}>
              <button type="submit" style={{
                background: 'var(--main-color)', color: '#fff',
                padding: '14px 44px', fontWeight: 950, border: 0,
                borderRadius: 8, fontSize: 14,
                boxShadow: '0 10px 24px rgba(247,32,57,0.22)',
                cursor: 'pointer',
              }}>Submit Feedback</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
