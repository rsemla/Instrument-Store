new Vue({
  el: "#store-app",
  data: {
    items: [
      {
        name: "Telecaster Bass",
        type: "Bass Guitar",
        price: "1,249.99",
        brand: "fender",
        image: 
"https://guitarrasfender.files.wordpress.com/2011/03/fender-telecaster-bass.jpg",
        hover: false,
        hasPopUp: false
      },
      {
        name: "BBP35 Electric Bass",
        type: "Bass Guitar",
        price: "1,299.00",
        brand: "yamaha",
        image: "http://c1.zzounds.com/media/fit,2018by3200/quality,85/BB734A_DCS_f_0001-84dfa99bdb6b0e9a53765d2d17f8c38a.jpg",
        hover: false,
        hasPopUp: false
      },
      {
        name: "John Campbell Bass",
        type: "Bass Guitar",
        price: "1,399.00",
        brand: "maton",
        image: "https://media.musiciansfriend.com/is/image/MMGS7/LTD-John-Campbell-JC-4FM-Electric-Bass-Transparent-Black/L20289000001000-00-500x500.jpg",
        hover: false,
        hasPopUp: false
      },
      {
        name: "QMT Stratocaster",
        type: "Electric Guitar",
        price: "2,300.00",
        brand: "fender",
        image: "https://media.guitarcenter.com/is/image/MMGS7/American-QMT-Stratocaster-HSS-Pale-Moon-Ebony-Fingerboard-Limited-Edition-Electric-Guitar-Transparent-Black/L59798000001000-00-500x500.jpg",
        hover: false,
        hasPopUp: false
      },
      {
        name: "Revstar Electric",
        price: "999.99",
        type: "Electric Guitar",
        brand: "yamaha",
        image: "https://www.strumentimusicali.net/images/product/600x450/2019/02/14/29/yamaha-revstar820brushedblack-1.webp",
        hover: false,
        hasPopUp: false
      },
      {
        name: "Coronado Hollowbody",
        type: "Electric Guitar",
        price: "2,500.00",
        brand: "maton",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/Coronado-Semi-Hollowbody-Electric-Guitar-Black-Cherry-Burst-Rosewood-Fingerboard/J01792000002001-00-750x750.jpg",
        hover: false,
        hasPopUp: false
      }
    ],
    showPopUp: false,
    popUpItem: {},
    cart: [],
    newName: "",
    newPrice: "",
    newBrand: "fender",
    newType: "",
    cartImage: "https://images.vexels.com/media/users/3/141186/isolated/preview/431ad815c9a8402ebdf354c82923c2a5-shopping-cart-6-by-vexels.png",
    noImage: "https://moorestown-mall.com/noimage.gif"
  },

  methods: {
    newItem: function() {
      if (this.newName.trim() != "" && this.newPrice.trim() != "") {
        this.items.push({
          name: this.newName.trim(),
          type: this.newType.trim(),
          price: this.newPrice.trim(),
          brand: this.newBrand,
          noImage: true,
          hover: false
        });
      } else {
        alert("You must enter a Name, Type, and Price to Submit.");
      }
      this.newName = "";
      this.newPrice = "";
      this.newType = "";
      this.newCategory = "";
    },
    addToCart: function(item, index) {
        this.cart.push(item);
      this.items.splice(index,1)
    },
    popUp: function(item) {
      this.showPopUp=!this.showPopUp;
      window.scrollTo(0,0);
      this.popUpItem=item;
    },
    empty: function() {
      this.items=this.items.concat(this.cart);
      this.cart=[];
    }
  }
});