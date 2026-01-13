import "../scss/main.scss";
import Alpine from "alpinejs";
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
    },

    previousPage() {
      if (this.currentPage > 1) this.currentPage--;
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
});

Alpine.start();
