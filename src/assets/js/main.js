import "../scss/main.scss";
import Alpine from "alpinejs";
import Swal from "sweetalert2";
import intersect from "@alpinejs/intersect";
import homepage from "../../data/homepage.js";
import products from "../../data/products.js";

window.Alpine = Alpine;

Alpine.plugin(intersect);

document.addEventListener("alpine:init", () => {
  Alpine.store("homepage", homepage);
  Alpine.store("products", products);

  Alpine.data("paginate", (initialItems = [], perPage = 10) => ({
    items: initialItems,
    currentPage: 1,
    itemsPerPage: perPage,

    get totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },

    get pagedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.items.slice(start, end);
    },

    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
      window.scrollTo({
        top: 0,
        left: 0,
      });
    },

    previousPage() {
      if (this.currentPage > 1) this.currentPage--;
      window.scrollTo({
        top: 0,
        left: 0,
      });
    },

    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) this.currentPage = page;
    },
  }));

  Alpine.data("productDetail", () => ({
    product: null,
    loaded: false,

    init() {
      // 1. Get the slug from the URL
      const params = new URLSearchParams(window.location.search);
      const currentSlug = params.get("item");

      // 2. Find the match in our data array
      if (currentSlug) {
        this.product = products.find((p) => p.slug === currentSlug);
      }

      // 3. Mark as loaded to show UI
      this.loaded = true;
    },
  }));

  Alpine.data("orders", () => ({
    mobile: "",
    orders: [],
    orderInput: [],
    submit() {
      const phoneRegex = /^\+?(\d[\d-. ]+)?(\([\d-. ]+\))?[\d-. ]+\d$/;

      if (!phoneRegex.test(this.mobile)) {
        Swal.fire({
          title: "Oops!",
          text: "That doesn't look like a valid phone number.",
          icon: "error",
        });
        return;
      }
      // 1. Move the current selections into the 'orders' history
      // We use the spread operator [...] to create a copy
      this.orders = [...this.orderInput];

      if (this.orders.length === 0) {
        Swal.fire({
          title: "Ooops!",
          text: "Please select at least one item!!",
          icon: "warning",
          confirmButtonText: "Ok",
        });

        return;
      }

      // 2. Alert the items (no need to split an array, just join it)
      Swal.fire({
        title: "Success!",
        text: "You're order have been placed.Please wait for us to call you back.Thank you!!",
        icon: "success",
        confirmButtonText: "Ok",
      });

      // 3. Optional: Clear the selection after ordering
      this.orderInput = [];
      this.mobile = "";
    },
  }));
});

Alpine.start();
