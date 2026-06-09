export const metadata = {
  title: "Feedback | NSIT Patna",
};

const feedbackTypes = [
  { title: "Students Feedback", href: "/feedback/student", icon: "🎓" },
  { title: "Alumni Feedback", href: "/feedback/alumni", icon: "⭐" },
  { title: "Parents Feedback", href: "/feedback/parents", icon: "👨‍👩‍👧‍👦" },
  { title: "Teachers Feedback", href: "/feedback/teacher", icon: "📚" },
  { title: "Students Satisfaction Survey Feedback", href: "/feedback/satisfaction-survey", icon: "📋" },
];

export default function FeedbackPage() {
  return (
    <main>
      <section style={{position:'relative', overflow:'hidden', background:'linear-gradient(135deg, rgba(247,32,57,0.08), transparent 42%), linear-gradient(180deg, #ffffff 0%, #f6f8fb 100%)', borderBottom:'1px solid var(--border-color)'}}>
        <div style={{position:'relative', zIndex:1, width:'min(1320px, calc(100% - 48px))', margin:'0 auto', padding:'42px 0 48px'}}>
          <h1 className="mb-2" style={{maxWidth:900, margin:'14px 0 0', color:'#071225', fontSize:'clamp(38px, 5vw, 64px)', lineHeight:1.02}}>Feedback</h1>
        </div>
      </section>

      <style>{`
        .feedback-card { background: #fff; border: 1px solid var(--border-color); border-radius: 12px; padding: 36px 24px; text-align: center; box-shadow: 0 18px 42px rgba(23,32,51,0.08); transition: transform 200ms ease, box-shadow 200ms ease; cursor: pointer; text-decoration: none; display: block; }
        .feedback-card:hover { transform: translateY(-6px); box-shadow: 0 24px 52px rgba(23,32,51,0.15); }
        .feedback-icon { width: 64px; height: 64px; border-radius: 50%; background: #fff5f6; display: flex; align-items: center; justify-content: center; margin: 0 auto; font-size: 26px; border: 2px solid rgba(247,32,57,0.12); }
        .feedback-title { margin: 16px 0 0; font-size: 17px; font-weight: 950; color: #14213d; }
        .feedback-cta { margin-top: 14px; display: flex; align-items: center; justify-content: center; gap: 8px; color: var(--main-color); font-size: 13px; font-weight: 950; text-transform: uppercase; letter-spacing: 0.05em; }
      `}</style>

      <section style={{width:'min(1160px, calc(100% - 48px))', margin:'0 auto', padding:'76px 0 92px'}}>
        <div style={{marginBottom:32}}>
          <span style={{color:'var(--main-color)', fontSize:12, fontWeight:950, letterSpacing:'0.08em', textTransform:'uppercase'}}>Feedback Forms</span>
          <h2 style={{margin:'8px 0 0', color:'#14213d', fontSize:'clamp(24px,3vw,36px)'}}>Choose a Feedback Type</h2>
        </div>
        <div className="row" style={{gap:20, justifyContent:'center'}}>
          {feedbackTypes.map((item) => (
            <div key={item.title} className="col-lg" style={{flex:'1 1 200px', maxWidth:280, minWidth:200}}>
              <a href={item.href} className="feedback-card">
                <div className="feedback-icon">{item.icon}</div>
                <h3 className="feedback-title">{item.title}</h3>
                <div className="feedback-cta">
                  <span>Give Feedback</span>
                  <span style={{fontSize:14}}>→</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
