import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const metros = [
  ["New York City", "NY", "new-york-city"], ["Los Angeles", "CA", "los-angeles"],
  ["Chicago", "IL", "chicago"], ["Dallas-Fort Worth", "TX", "dallas-fort-worth"],
  ["Houston", "TX", "houston"], ["Washington DC", "DC", "washington-dc"],
  ["Philadelphia", "PA", "philadelphia"], ["Miami-Fort Lauderdale", "FL", "miami-fort-lauderdale"],
  ["Atlanta", "GA", "atlanta"], ["Boston", "MA", "boston"],
  ["Phoenix", "AZ", "phoenix"], ["San Francisco Bay Area", "CA", "san-francisco-bay-area"],
  ["Riverside-San Bernardino", "CA", "riverside-san-bernardino"], ["Detroit", "MI", "detroit"],
  ["Seattle", "WA", "seattle"], ["Minneapolis-St. Paul", "MN", "minneapolis-st-paul"],
  ["San Diego", "CA", "san-diego"], ["Tampa-St. Petersburg", "FL", "tampa-st-petersburg"],
  ["Denver", "CO", "denver"], ["Baltimore", "MD", "baltimore"],
  ["St. Louis", "MO", "st-louis"], ["Charlotte", "NC", "charlotte"],
  ["Orlando", "FL", "orlando"], ["San Antonio", "TX", "san-antonio"],
  ["Portland", "OR", "portland"], ["Sacramento", "CA", "sacramento"],
  ["Pittsburgh", "PA", "pittsburgh"], ["Las Vegas", "NV", "las-vegas"],
  ["Austin", "TX", "austin"], ["Cincinnati", "OH", "cincinnati"],
  ["Kansas City", "MO", "kansas-city"], ["Columbus", "OH", "columbus"],
  ["Cleveland", "OH", "cleveland"], ["Indianapolis", "IN", "indianapolis"],
  ["San Jose", "CA", "san-jose"], ["Nashville", "TN", "nashville"],
  ["Virginia Beach-Norfolk", "VA", "virginia-beach-norfolk"], ["Providence", "RI", "providence"],
  ["Milwaukee", "WI", "milwaukee"], ["Jacksonville", "FL", "jacksonville"],
  ["Oklahoma City", "OK", "oklahoma-city"], ["Raleigh-Durham", "NC", "raleigh-durham"],
  ["Memphis", "TN", "memphis"], ["Richmond", "VA", "richmond"],
  ["New Orleans", "LA", "new-orleans"], ["Louisville", "KY", "louisville"],
  ["Salt Lake City", "UT", "salt-lake-city"], ["Hartford", "CT", "hartford"],
  ["Buffalo", "NY", "buffalo"], ["Birmingham", "AL", "birmingham"],
  ["Rochester", "NY", "rochester"], ["Grand Rapids", "MI", "grand-rapids"],
  ["Tucson", "AZ", "tucson"], ["Tulsa", "OK", "tulsa"],
  ["Fresno", "CA", "fresno"], ["Honolulu", "HI", "honolulu"],
  ["Worcester", "MA", "worcester"], ["Omaha", "NE", "omaha"],
  ["Bridgeport-Stamford", "CT", "bridgeport-stamford"], ["Greenville-Spartanburg", "SC", "greenville-spartanburg"],
  ["Albuquerque", "NM", "albuquerque"], ["Bakersfield", "CA", "bakersfield"],
  ["Albany", "NY", "albany"], ["Knoxville", "TN", "knoxville"],
  ["McAllen", "TX", "mcallen"], ["Baton Rouge", "LA", "baton-rouge"],
  ["El Paso", "TX", "el-paso"], ["Allentown", "PA", "allentown"],
  ["Dayton", "OH", "dayton"], ["Columbia", "SC", "columbia"],
  ["Greensboro-Winston-Salem", "NC", "greensboro-winston-salem"], ["Little Rock", "AR", "little-rock"],
  ["Akron", "OH", "akron"], ["Charleston", "SC", "charleston"],
  ["Syracuse", "NY", "syracuse"], ["Colorado Springs", "CO", "colorado-springs"],
  ["Wichita", "KS", "wichita"], ["Springfield", "MA", "springfield"],
  ["Toledo", "OH", "toledo"], ["Boise", "ID", "boise"],
  ["Des Moines", "IA", "des-moines"], ["Madison", "WI", "madison"],
  ["Lakeland-Winter Haven", "FL", "lakeland-winter-haven"], ["Ogden", "UT", "ogden"],
  ["Daytona Beach", "FL", "daytona-beach"], ["Spokane", "WA", "spokane"],
  ["Augusta", "GA", "augusta"], ["Scranton-Wilkes-Barre", "PA", "scranton-wilkes-barre"],
  ["Chattanooga", "TN", "chattanooga"], ["Provo-Orem", "UT", "provo-orem"],
  ["Lancaster", "PA", "lancaster"], ["Port St. Lucie", "FL", "port-st-lucie"],
  ["Winston-Salem", "NC", "winston-salem"], ["Pensacola", "FL", "pensacola"],
  ["Youngstown", "OH", "youngstown"], ["Harrisburg", "PA", "harrisburg"],
  ["Fayetteville", "AR", "fayetteville"], ["Cape Coral-Fort Myers", "FL", "cape-coral-fort-myers"],
  ["Newark-Jersey City", "NJ", "newark-jersey-city"], ["Wilmington", "DE", "wilmington"],
  ["Portland", "ME", "portland-maine"], ["Manchester", "NH", "manchester-new-hampshire"],
  ["Burlington", "VT", "burlington-vermont"], ["Jackson", "MS", "jackson-mississippi"],
  ["Charleston", "WV", "charleston-west-virginia"], ["Sioux Falls", "SD", "sioux-falls"],
  ["Fargo", "ND", "fargo"], ["Billings", "MT", "billings"],
  ["Cheyenne", "WY", "cheyenne"]
].filter(([, state]) => !["AK", "HI"].includes(state));

const products = [
  ["custom signs", "tabletop-banners", "/assets/categories/tabletop-banners.png"],
  ["vinyl banners", "vinyl-banners", "/assets/categories/vinyl-banners.png"],
  ["yard signs", "yard-signs", "/assets/categories/yard-signs.png"],
  ["decals and stickers", "vehicle-magnets", "/assets/categories/vehicle-magnets.png"],
  ["vehicle lettering", "vehicle-magnets", "/assets/categories/vehicle-magnets.png"],
  ["storefront signs", "roll-up-displays", "/assets/categories/rollup-displays.png"],
  ["real estate signs", "real-estate-signs", "/assets/categories/yard-signs.png"],
  ["job site signs", "job-site-signs", "/assets/categories/job-site-signs.png"]
];

const industries = [
  "contractors", "realtors", "restaurants", "retail stores",
  "schools", "event planners", "property managers", "service businesses"
];

const imageSheet = "/assets/categories/metro-product-collage.jpg";

const css = `
:root{--ink:#05070b;--navy:#071426;--blue:#0b5ed7;--sky:#13a7ff;--silver:#d8e1ec;--paper:#f6f9fd;--line:rgba(7,20,38,.13);--shadow:0 22px 54px rgba(7,20,38,.12)}
*{box-sizing:border-box}body{margin:0;font-family:Inter,Arial,Helvetica,sans-serif;background:radial-gradient(circle at 18% 0%,rgba(19,167,255,.16),transparent 30rem),linear-gradient(180deg,#fff,var(--paper) 58%,#fff);color:var(--ink);line-height:1.55;font-weight:650}a{color:inherit;text-decoration:none}.wrap{width:min(1120px,calc(100% - 32px));margin:0 auto}.top{background:linear-gradient(90deg,#05070b,#071426 52%,#0b5ed7);color:#fff;border-bottom:1px solid rgba(255,255,255,.18);box-shadow:0 14px 36px rgba(7,20,38,.16)}.top .wrap{display:flex;justify-content:space-between;gap:16px;align-items:center;padding:14px 0;flex-wrap:wrap}.brand{display:flex;gap:12px;align-items:center;font-weight:950;text-transform:uppercase}.brand small{letter-spacing:.08em;color:#d8e1ec}.mark{width:50px;height:50px;border-radius:13px;display:grid;place-items:center;background:linear-gradient(145deg,#06101f,#0b5ed7 54%,#13a7ff);color:#fff;border:1px solid rgba(255,255,255,.75);box-shadow:inset 0 0 0 2px rgba(255,255,255,.18),0 14px 30px rgba(11,94,215,.32)}.nav{display:flex;gap:8px;flex-wrap:wrap}.nav a{font-weight:950;text-transform:uppercase;border:1px solid rgba(255,255,255,.22);border-radius:9px;padding:9px 10px;background:linear-gradient(180deg,rgba(255,255,255,.15),rgba(255,255,255,.05))}.nav a:hover{background:linear-gradient(135deg,#13a7ff,#0b5ed7);color:#fff}.hero{position:relative;overflow:hidden;background:radial-gradient(circle at 78% 18%,rgba(19,167,255,.22),transparent 26rem),linear-gradient(135deg,#fff 0%,#f8fbff 48%,#dce6f0 100%);border-bottom:1px solid var(--line)}.hero:before{content:"";position:absolute;inset:0;background:linear-gradient(105deg,transparent 0 48%,rgba(11,94,215,.08) 48% 54%,transparent 54%);pointer-events:none}.hero .wrap{position:relative;padding:64px 0 58px}.eyebrow{color:var(--blue);font-weight:950;text-transform:uppercase;letter-spacing:.14em;font-size:.82rem}h1{font-size:clamp(2.35rem,5vw,5rem);line-height:1.04;margin:12px 0 18px;text-transform:uppercase;color:#071426;letter-spacing:-.04em;max-width:900px}h2{font-size:clamp(1.8rem,3vw,3rem);line-height:1.08;margin:0 0 14px;text-transform:uppercase;letter-spacing:-.03em;color:#071426}p{font-size:1rem;color:#526071}.lead{font-size:1.16rem;max-width:800px;color:#465468}.visual{height:315px;margin-top:26px;border-radius:18px;overflow:hidden;border:1px solid var(--line);box-shadow:var(--shadow),0 18px 48px rgba(11,94,215,.18);background:#fff;padding:10px}.visual img{width:100%;height:100%;object-fit:cover;object-position:center;border-radius:12px}.actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}.btn{display:inline-flex;min-height:48px;align-items:center;justify-content:center;padding:12px 17px;border-radius:10px;font-weight:950;text-transform:uppercase;letter-spacing:.04em;border:1px solid rgba(7,20,38,.16);box-shadow:inset 0 1px 0 rgba(255,255,255,.55),0 14px 30px rgba(7,20,38,.14)}.primary{background:linear-gradient(135deg,#fff,#d8e1ec 52%,#f9fcff);color:#071426}.red{background:linear-gradient(135deg,#13a7ff,#0b5ed7 48%,#06101f);color:#fff}.dark{background:linear-gradient(135deg,#182234,#05070b);color:#fff;border-color:#d8e1ec}section{padding:58px 0}.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:15px}.card{overflow:hidden;background:linear-gradient(#fff,#fff) padding-box,linear-gradient(135deg,rgba(11,94,215,.28),rgba(216,225,236,.9),rgba(7,20,38,.12)) border-box;border:1px solid transparent;border-radius:12px;min-height:150px;box-shadow:0 18px 42px rgba(7,20,38,.09)}.card img{width:100%;height:128px;object-fit:cover;border-bottom:1px solid rgba(7,20,38,.1)}.card .body{padding:18px}.card h3{margin:0 0 8px;font-size:1.16rem;text-transform:uppercase;color:#071426}.card p,.card li{color:#526071}.band{background:radial-gradient(circle at 80% 16%,rgba(19,167,255,.25),transparent 28rem),linear-gradient(135deg,#071426,#0b5ed7 70%,#06101f);color:#fff;border-top:1px solid rgba(255,255,255,.16);border-bottom:1px solid rgba(255,255,255,.16)}.band h2,.band .card h3{color:#fff}.band .card{padding:20px;background:linear-gradient(180deg,rgba(255,255,255,.12),rgba(255,255,255,.04));border-color:rgba(255,255,255,.16);box-shadow:none}.band .card p,.band .card li{color:rgba(255,255,255,.78)}.note{background:#fff;border:1px solid var(--line);border-left:10px solid var(--blue);padding:22px;border-radius:12px;box-shadow:var(--shadow)}.metros{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}.metro{background:linear-gradient(135deg,#fff,#d8e1ec);border:1px solid var(--line);border-radius:10px;padding:12px;text-align:center;font-weight:950;text-transform:uppercase}.metro:hover{color:#fff;background:linear-gradient(135deg,#13a7ff,#0b5ed7 54%,#071426)}footer{background:linear-gradient(135deg,#05070b,#071426);color:#fff;padding:38px 0;border-top:1px solid rgba(255,255,255,.14)}footer p{color:rgba(255,255,255,.74)}@media(max-width:850px){.grid{grid-template-columns:repeat(2,1fr)}.metros{grid-template-columns:repeat(3,1fr)}.nav{width:100%;display:flex;gap:8px;flex-wrap:wrap}.nav a{margin-left:0}}@media(max-width:560px){.grid,.metros{grid-template-columns:1fr}.top .wrap{align-items:flex-start}.hero .wrap{padding:44px 0}h1{font-size:2.35rem}.visual{height:230px}}
`;

const safe = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const layout = ({ title, description, body }) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${safe(title)}</title>
  <meta name="description" content="${safe(description)}">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23101010'/%3E%3Cpath d='M12 17h40v30H12z' fill='%23f6c443'/%3E%3Cpath d='M17 22h30v6H17zm0 12h22v6H17z' fill='%23101010'/%3E%3Cpath d='M9 14h46v36H9z' fill='none' stroke='%23d82424' stroke-width='5'/%3E%3C/svg%3E">
  <style>${css}</style>
</head>
<body>
  <header class="top">
    <div class="wrap">
      <a class="brand" href="/"><span class="mark">EZ</span><span>EZ Sign Store<br><small>National Sign Buying Guide</small></span></a>
      <nav class="nav" aria-label="Metro page navigation">
        <a href="/">Home</a>
        <a href="/metros/">Metro Directory</a>
        <a href="/products/">Products</a>
        <a href="/#quote">Quote</a>
      </nav>
    </div>
  </header>
  ${body}
  <footer>
    <div class="wrap">
      <strong>EZ Sign Store</strong>
      <p>Nationwide online sign ordering guidance, powered by EZ Sign Store and backed by the sign production experience of DeZant Signs.</p>
    </div>
  </footer>
</body>
</html>`;

const metroCardLinks = metros.map(([name, state, slug]) => `<a class="metro" href="/metros/${slug}/">${safe(name)}, ${state}</a>`).join("\n");

const directoryBody = `
  <section class="hero">
    <div class="wrap">
      <div class="eyebrow">Sign buying guides by major metro area</div>
      <h1>Custom signs for businesses across major U.S. markets.</h1>
      <p class="lead">Find helpful sign and print guidance for banners, decals, yard signs, vehicle lettering, storefront graphics, real estate signs, job site signs, and custom printed products.</p>
      <div class="visual"><img src="${imageSheet}" alt="Modern sign products including banners, yard signs, decals, vehicle lettering, and storefront signs"></div>
      <div class="actions">
        <a class="btn primary" href="/#quote">Request a Quote</a>
        <a class="btn red" href="/products/">Explore Sign Types</a>
      </div>
    </div>
  </section>
  <section>
    <div class="wrap">
      <h2>Major Metro Sign Guides</h2>
      <p>Choose a market below to find product ideas, artwork tips, and sign-ordering guidance for local businesses, contractors, real estate teams, schools, events, and organizations.</p>
      <div class="metros">${metroCardLinks}</div>
    </div>
  </section>`;

mkdirSync("dist/metros", { recursive: true });
writeFileSync("dist/metros/index.html", layout({
  title: "Custom Signs by Metro Area | EZ Sign Store National Guide",
  description: "Find custom sign, banner, yard sign, decal, vehicle lettering, storefront sign, real estate sign, and job site sign pages by major U.S. metro area.",
  body: directoryBody
}));

for (const [name, state, slug] of metros) {
  const dir = join("dist/metros", slug);
  mkdirSync(dir, { recursive: true });
  const body = `
  <section class="hero">
    <div class="wrap">
      <div class="eyebrow">Custom sign ordering in the ${safe(name)} metro area</div>
      <h1>Custom signs for ${safe(name)} businesses, contractors, events, and organizations.</h1>
      <p class="lead">EZ Sign Store helps customers in the ${safe(name)} area understand and order banners, yard signs, decals, vehicle lettering, storefront graphics, real estate signs, job site signs, and custom printed products through a nationwide online ordering experience.</p>
      <div class="visual"><img src="${imageSheet}" alt="Custom sign products for ${safe(name)} including banners, decals, yard signs, vehicle lettering, and storefront signs"></div>
      <div class="actions">
        <a class="btn primary" href="/#quote">Request a Quote</a>
        <a class="btn red" href="/products/">Explore Sign Types</a>
        <a class="btn dark" href="/metros/">All Metro Pages</a>
      </div>
    </div>
  </section>
  <section>
    <div class="wrap">
      <h2>Popular signs for ${safe(name)}</h2>
      <div class="grid">
        ${products.map(([product, slug, image]) => `<a class="card" href="/products/${slug}/"><img src="${image}" alt="${safe(product)} from EZ Sign Store"><div class="body"><h3>${safe(product)}</h3><p>Helpful buying guidance for ${safe(product)} used by ${safe(name)} area businesses, service companies, event teams, schools, real estate professionals, and organizations.</p></div></a>`).join("\n")}
      </div>
    </div>
  </section>
  <section class="band">
    <div class="wrap">
      <h2>Signs by business type</h2>
      <div class="grid">
        ${industries.map((industry) => `<article class="card"><h3>${safe(industry)}</h3><p>Sign options for ${safe(industry)} in the ${safe(name)} market, including temporary promotions, outdoor visibility, branded vehicles, storefront needs, and event signage.</p></article>`).join("\n")}
      </div>
    </div>
  </section>
  <section>
    <div class="wrap">
      <div class="note">
        <h2>Online ordering with real sign-shop guidance</h2>
        <p>EZ Sign Store can help customers in and around ${safe(name)}, ${state} choose the right product, prepare artwork, compare materials, and move toward a quote or order with confidence.</p>
        <div class="actions">
          <a class="btn primary" href="/#quote">Upload Artwork or Request Pricing</a>
          <a class="btn dark" href="/metros/">Browse More Metro Areas</a>
        </div>
      </div>
    </div>
  </section>`;

  writeFileSync(join(dir, "index.html"), layout({
    title: `Custom Signs in ${name} | Banners, Decals, Yard Signs & Vehicle Lettering`,
    description: `Custom signs for ${name}: banners, yard signs, decals, vehicle lettering, storefront signs, real estate signs, job site signs, and online sign ordering guidance.`,
    body
  }));
}

console.log(`Generated ${metros.length} metro pages plus the metro directory.`);
