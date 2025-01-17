"use client"
export default function Shopdetailprice(){
    let messagea = "";
    let messageb = "";

    if (typeof window !== "undefined") {
      const curl = window.location.pathname;
      if (curl.includes('/Shop/1')) {
        messagea = "$38.00";
        messageb = "$45.00"
      } else if (curl.includes('/Shop/2')) {
        messagea = "$28.00";
      } else if (curl.includes('/Shop/3')) {
        messagea = "$21.00";
        messageb = "$45.00"
      } else if (curl.includes('/Shop/4')) {
        messagea = "$45.00";
      } else if (curl.includes('/Shop/5')) {
        messagea = "$23.00";
        messageb = "$45.00"
      } else {
        ;
      }
    }
  
    return (
      <div>
        <section className="mt-6">
        <h2>
            <span className="text-[#FF9F0D] text-2xl mr-5">
          {messagea}
          </span>
          <del className="text-slate-400 text-2xl">{messageb}
          </del>
          </h2>
        </section>
      </div>
    );
}