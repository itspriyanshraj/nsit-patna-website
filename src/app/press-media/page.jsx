export const metadata = {
  title: "Press & Media | NSIT Patna",
};

export default function PressMediaPage() {
  return (
    <main>
      <section style={{position:'relative', overflow:'hidden', background:'linear-gradient(135deg, rgba(247,32,57,0.08), transparent 42%), linear-gradient(180deg, #ffffff 0%, #f6f8fb 100%)', borderBottom:'1px solid var(--border-color)'}}>
        <div style={{position:'relative', zIndex:1, width:'min(1320px, calc(100% - 48px))', margin:'0 auto', padding:'42px 0 48px'}}>
          <h1 className="mb-2" style={{maxWidth:900, margin:'14px 0 0', color:'#071225', fontSize:'clamp(38px, 5vw, 64px)', lineHeight:1.02}}>Press &amp; Media</h1>
        </div>
      </section>

      <section style={{width:'min(1320px, calc(100% - 48px))', margin:'0 auto', padding:'76px 0 92px', textAlign:'center'}}>
        <div style={{background:'#fff', border:'1px solid var(--border-color)', borderRadius:8, boxShadow:'0 18px 42px rgba(23,32,51,0.08)', padding:'80px 20px'}}>
          <div style={{fontSize:48, marginBottom:16, opacity:0.2}}>🚧</div>
          <h2 style={{color:'#14213d', fontSize:26, fontWeight:950, margin:0}}>Coming Soon</h2>
          <p style={{color:'var(--para-color)', fontSize:15, fontWeight:600, marginTop:10, maxWidth:400, marginLeft:'auto', marginRight:'auto', lineHeight:1.6}}>
            We&apos;re gathering press releases and media coverage. Check back soon!
          </p>
        </div>
      </section>
    </main>
  );
}
