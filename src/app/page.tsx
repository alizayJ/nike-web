import Image from "next/image";

export default function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="grey-hero">
          <p style={{ fontSize: "14px", margin: "8px" }}>Hello Nike App </p>
          <p style={{ fontSize: "11px", fontWeight: "400" }}>
            Download the app to access everything Nike.
            <span style={{ fontWeight: "500" }}>
              <u>Get Your Great</u>
            </span>
          </p>
        </div>
        <div className="hero-img">
          <Image
            src="/home/Image.png"
            width={1344}
            height={700}
            alt="Main Picture"
          />
        </div>
        <div className="hero-product">
          <p style={{ fontSize: "15px" }}>First Look</p>
          <h1 style={{ fontSize: "58px", marginTop: "12px" }}>
            NIKE AIR MAX PULSE
          </h1>
          <p style={{ fontWeight: "400", fontSize: "15px", marginTop: "16px" }}>
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse <br /> —designed to push you past your limits and help you go
            to the max.
          </p>
          <div className="hero-buttons">
            <button>Notify Me</button>
            <button>Shop Air Max</button>
          </div>
        </div>
      </div>

      <div className="bestof-home">
        <div className="bestof-hometop">
          <p style={{ fontSize: "22px", fontWeight: "500", padding: "12px" }}>
            Best of Air Max
          </p>
          <div className="shop-home">
            <p style={{ fontSize: "15px", padding: "12px", margin: "3px" }}>
              Shop
            </p>
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </div>

        <div className="slider" style={{ fontWeight: "500", fontSize: "15px" }}>
          <div>
            <Image
              src="/home/shoe1.png"
              width={441}
              height={441}
              alt="shoe 1"
            />
            <div style={{ display: "flex" }}>
              <p>
                Nike Air Max Pulse <br />
                <span style={{ color: "#757575", fontWeight: "400" }}>Women&apos;s Shoes</span>
              </p>
              <p className="home-price">₹ 13 995</p>
            </div>
          </div>

          <div style={{ marginLeft: "1%" }}>
            <Image
              src="/home/shoe2.png"
              width={441}
              height={441}
              alt="shoe 3"
            />
            <div style={{ display: "flex" }}>
              <p>
                Nike Air Max Pulse <br />
                <span style={{ color: "#757575", fontWeight: "400" }}>
                  Men&apos;s Shoes
                </span>
              </p>
              <p>₹ 13 995</p>
            </div>
          </div>

          <div style={{ marginLeft: "1%" }}>
            <Image
              src="/home/shoe3.png"
              width={441}
              height={441}
              alt="shoe 3"
            />
            <div style={{ display: "flex" }}>
              <p>
                Nike Air Max 97 SE <br />
                <span style={{ color: "#757575", fontWeight: "400" }}>
                  Men&apos;s Shoes
                </span>
              </p>
              <p className="home-price">₹ 16 995</p>
            </div>
          </div>
        </div>
      </div>

      <div className="featured-home">
        <h1
          style={{ fontSize: "23px", paddingBottom: "2%", fontWeight: "500" }}
        >
          Featured
        </h1>
        <Image
          src="/home/featured.png"
          width={1344}
          height={700}
          alt="Main Picture"
        />
        <div className="stepinto-home">
          <h1 style={{ fontSize: "54x", fontWeight: "500" }}>
            STEP INTO WHAT FEELS GOOD
          </h1>
          <p style={{ fontSize: "15px", fontWeight: "400" }}>
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>
          <button>Find Your Shoe</button>
        </div>
      </div>

      <div className="gearup-home"style={{marginBottom:"8%"}}>
        <h1 style={{ fontSize: "23px", fontWeight: "500"}}>Gear Up</h1>

        <div className="shopitems-home" style={{display:"flex"}}>

        <div className="shopwomen-home" style={{marginRight:"4%", marginLeft:"auto"}}>
          <div className="shop-home">
            <p style={{ fontSize: "15px", padding: "12px", margin: "3px",fontWeight: "500" }}>
              Shop Men&apos;s
            </p>
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
              <div className="img-home" style={{display:"flex"}}>
            <div>
          <Image
            src="/home/shop-men.png"
            width={300}
            height={300}
            alt="Main Picture"
          />
          <div style={{display:"flex"}}>
            <p>Nike Dri-FIT ADV TechKnit Ultra <br /> <span style={{color:"#757575"}}>Men&apos;s Short-Sleeve Running Top <br />Running Top</span></p>
            <p className="home-price">₹ 3 895</p> </div>
          </div>
          <div style={{margin:"5px"}}>
          <Image
            src="/home/shop-men2.png"
            width={300}
            height={300}
            alt="Main Picture"
          />
          <div style={{display:"flex"}}>
            <p>Nike Dri-FIT ADV TechKnit Ultra <br /> <span style={{color:"#757575"}}>Men&apos;s Short-Sleeve Running Top <br />Running Top</span></p>
            <p className="home-price">₹ 3 895</p></div>
          </div>
          
          </div>
        </div>

        <div className="shopwomen-home">
          <div className="shop-home">
            <p style={{ fontSize: "15px", padding: "12px", margin: "3px",fontWeight: "500" }}>
              Shop Women&apos;s
            </p>
            <button>&lt;</button>
            <button>&gt;</button>
            </div>
          <div className="img-home" style={{display:"flex"}}>
            <div>
          <Image
            src="/home/shop-men.png"
            width={300}
            height={300}
            alt="Main Picture"
          />
          <div style={{display:"flex"}}>
            <p>Nike Dri-FIT ADV TechKnit Ultra <br /> <span style={{color:"#757575"}}>Men&apos;s Short-Sleeve Running Top <br />Running Top</span></p>
            <p className="home-price">₹ 3 895</p> </div>
          </div>
          <div style={{margin:"5px"}}>
          <Image
            src="/home/shop-men2.png"
            width={300}
            height={300}
            alt="Main Picture"
          />
          <div style={{display:"flex"}}>
            <p>Nike Dri-FIT ADV TechKnit Ultra <br /> <span style={{color:"#757575"}}>Men&apos;s Short-Sleeve Running Top <br />Running Top</span></p>
            <p className="home-price">₹ 3 895</p></div>
          </div>
          
          </div>
         </div>
         </div>
      </div>

      <div className="dontmiss-home">
      <h1 style={{ fontSize: "22px", fontWeight: "500", paddingBottom:"3%"}}>Don&apos;t Miss</h1>
      <Image
            src="/home/dontmiss.png"
            width={1344}
            height={700}
            alt="Main Picture"
          />

          <div className="stepinto-home">
          <h1 style={{ fontSize: "52px", fontWeight: "500" }}>FLIGHT ESSENTIALS</h1>
          <p style={{ fontSize: "15px", fontWeight: "400" }}>
          Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
          </p>
          <button>Shop</button>
        </div>
        </div>
        
        <div className="theessentials">
        <h1 style={{ fontSize: "23px", fontWeight: "500",marginBottom:"2%" }}>The Essentials</h1>
        <div className="theess-home" >
          <Image
            src="/home/theess1.png"
            width={440}
            height={540}
            alt="Main Picture"
          />
          <Image
            src="/home/theess2.png"
            width={440}
            height={540}
            alt="Main Picture"
          />
          <Image
            src="/home/theess3.png"
            width={440}
            height={540}
            alt="Main Picture"
          />

        </div>
        </div>
      
      <div className="lastlist-home">

        <div className="listlast">
       <ul>
        <li className="firsthead-home"><a href="#">Icons</a></li>
        <li><a href="#">Air Force 1</a></li>
        <li><a href="#">Huarache</a></li>
        <li><a href="#">Air Max 90</a></li>
        <li><a href="#">Air Max 95</a></li>
       </ul>
       </div>

        <div className="listlast">
       <ul>
        <li className="firsthead-home"><a href="#">Shoes</a></li>
        <li ><a href="#">All Shoes</a></li>
        <li><a href="#">Custom Shoes</a></li>
        <li><a href="#">Jordan Shoes</a></li>
        <li><a href="#">Running Shoes</a></li>
       </ul>
       </div>

       <div className="listlast">
       <ul>
        <li className="firsthead-home"><a href="#">Clothing</a></li>
        <li><a href="#">All clothing</a></li>
        <li><a href="#">Modest Wear</a></li>
        <li><a href="#">Hoodies & Pullover</a></li>
        <li><a href="#">Shirts & Tops</a></li>
       </ul>
       </div>

      <div className="listlast">
       <ul>
        <li className="firsthead-home"><a href="#">Kids&apos;</a></li>
        <li><a href="#">Infant and Toddlers shoes</a></li>
        <li><a href="#">Kids&apos; Shoes</a></li>
        <li><a href="#">kids&apos; Jordan Shoes</a></li>
        <li><a href="#">kids&apos; Running Shoes</a></li>
       </ul>
       </div>

      </div>
      

          


















    </div>
  );
}
