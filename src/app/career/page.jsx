export const metadata = {
  title: "Career | NSIT Patna",
};

const jobOpenings = [
  {
    title: "Assistant Professor (Computer Science & Engineering)",
    posts: "03",
    qualification: "PhD/M.Tech",
    experience: "Minimum 1 Year Teaching Experience",
    remarks: "Salary as per AICTE norms",
  },
];

export default function CareerPage() {
  return (
    <main>
      <section style={{position:'relative', overflow:'hidden', background:'linear-gradient(135deg, rgba(247,32,57,0.08), transparent 42%), linear-gradient(180deg, #ffffff 0%, #f6f8fb 100%)', borderBottom:'1px solid var(--border-color)'}}>
        <div style={{position:'relative', zIndex:1, width:'min(1320px, calc(100% - 48px))', margin:'0 auto', padding:'42px 0 48px'}}>
          <h1 className="mb-2" style={{maxWidth:900, margin:'14px 0 0', color:'#071225', fontSize:'clamp(38px, 5vw, 64px)', lineHeight:1.02}}>Career</h1>
        </div>
      </section>

      <section style={{width:'min(1160px, calc(100% - 48px))', margin:'0 auto', padding:'76px 0 92px'}}>
        <div style={{marginBottom:48}}>
          <span style={{color:'var(--main-color)', fontSize:12, fontWeight:950, letterSpacing:'0.08em', textTransform:'uppercase'}}>Hiring</span>
          <h2 style={{margin:'8px 0 0', color:'#071225', fontSize:'clamp(28px, 3.5vw, 44px)'}}>We are Hiring</h2>
        </div>

        <div style={{display:'grid', gap:24}}>
          {jobOpenings.map((job, i) => (
            <div key={i} className="row" style={{background:'#fff', border:'1px solid var(--border-color)', borderRadius:12, padding:32, boxShadow:'0 18px 42px rgba(23,32,51,0.08)', gap:0}}>
              <div className="col-lg" style={{padding:0}}>
                <div style={{width:56, height:56, display:'grid', placeItems:'center', background:'#fff5f6', borderRadius:10, marginBottom:16, fontSize:24, border:'2px solid rgba(247,32,57,0.12)'}}>💼</div>
                <h3 style={{margin:'0 0 20px', color:'#14213d', fontSize:20, fontWeight:850}}>{job.title}</h3>
                <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))', gap:'14px 28px'}}>
                  <div>
                    <span style={{color:'#888', fontSize:12, fontWeight:950, letterSpacing:'0.04em', textTransform:'uppercase'}}>No. Of Post</span>
                    <p style={{margin:'4px 0 0', color:'#14213d', fontSize:16, fontWeight:800}}>{job.posts}</p>
                  </div>
                  <div>
                    <span style={{color:'#888', fontSize:12, fontWeight:950, letterSpacing:'0.04em', textTransform:'uppercase'}}>Qualification</span>
                    <p style={{margin:'4px 0 0', color:'#14213d', fontSize:16, fontWeight:800}}>{job.qualification}</p>
                  </div>
                  <div>
                    <span style={{color:'#888', fontSize:12, fontWeight:950, letterSpacing:'0.04em', textTransform:'uppercase'}}>Experience</span>
                    <p style={{margin:'4px 0 0', color:'#14213d', fontSize:16, fontWeight:800}}>{job.experience}</p>
                  </div>
                  <div>
                    <span style={{color:'#888', fontSize:12, fontWeight:950, letterSpacing:'0.04em', textTransform:'uppercase'}}>Remarks</span>
                    <p style={{margin:'4px 0 0', color:'#14213d', fontSize:16, fontWeight:800}}>{job.remarks}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-auto" style={{padding:0, display:'flex', alignItems:'flex-end', paddingLeft:32}}>
                <a href="mailto:hr@nsit.in?subject=Application for Assistant Professor (CSE)" style={{
                  background:'var(--main-color)', color:'#fff', padding:'12px 32px',
                  fontWeight:950, border:0, borderRadius:8, fontSize:14, textDecoration:'none',
                  display:'inline-flex', alignItems:'center', gap:8, whiteSpace:'nowrap',
                  boxShadow:'0 10px 24px rgba(247,32,57,0.22)',
                }}>
                  Apply Now <span style={{fontSize:16}}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{marginTop:48, padding:32, background:'linear-gradient(135deg, rgba(247,32,57,0.06), transparent 52%), #fff', border:'1px solid var(--border-color)', borderRadius:12, boxShadow:'0 18px 42px rgba(23,32,51,0.08)'}}>
          <h4 style={{margin:'0 0 6px', color:'#14213d', fontSize:18, fontWeight:850}}>Send Your Application</h4>
          <p style={{margin:'0 0 14px', color:'#6c757d', fontSize:14, fontWeight:500}}>
            Interested candidates may send their CV and relevant documents to the HR department.
          </p>
          <p style={{margin:0, fontSize:14, color:'#6c757d', lineHeight:1.9}}>
            <strong style={{color:'#14213d'}}>Email:</strong> <a href="mailto:hr@nsit.in" style={{color:'var(--main-color)', fontWeight:950, textDecoration:'none'}}>hr@nsit.in</a><br />
            <strong style={{color:'#14213d'}}>Address:</strong> Netaji Subhas Institute of Technology, Amhara, Bihta, Patna-801118
          </p>
        </div>
      </section>
    </main>
  );
}
