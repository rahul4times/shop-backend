
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pizza').del()
    .then(function () {
      // Inserts seed entries
      return knex('pizza').insert([
        {
          item: 'SPICY ITALIAN',
          detail: 'Spice things up with a double portion of Italian sausage plus premium pepperoni and real cheese made from mozzarella, all on our signature pizza sauce and hand-tossed original crust. Served with crushed red pepper for an extra kick.',
          price: 18.99,
          size: '18in Large',
          image: 'https://www.papajohns.com/static-assets/a/images/web/product/pizzas/sma_SpicyItalian_m-compressed.jpg'
        },
        {
          item: 'BBQ CHICKEN BACON',
          detail: 'We had you at bacon, right? It gets even better. Zesty BBQ sauce adds a tangy twist to this irresistible pizza topped with grilled all-white chicken, bacon and fresh-sliced onions. Round one up today.',
          price: 18.99,
          size: '18in Large',
          image: 'https://www.papajohns.com/static-assets/a/images/web/product/pizzas/std_BBQChknBcn-compressed.jpg'
        },
        {
          item: 'HAWAIIAN BBQ CHICKEN',
          detail: 'Aloha! You’re on island time with the Hawaiian BBQ Chicken pizza. Smothered in zesty BBQ sauce, it’s topped with grilled all-white chicken, bacon, fresh-sliced onions and sweet, juicy pineapple tidbits for a taste of the tropics.',
          size: '18in Large',
          price: 16.90,
          image: 'https://www.papajohns.com/static-assets/a/images/web/product/pizzas/std_HawaiianBBQ-compressed.jpg'
        },
        {
          item: 'GARDEN FRESH',
          detail: 'All your favorite veggies together on a delightfully delicious pizza. Loaded with crisp green peppers, fresh-sliced onions, Crimini mushrooms, ripe black olives and vine-ripened Roma tomatoes. Lovingly prepared and delivered hot from our oven to your home.',
          size: '18in Large',
          price: 15.99,
          image: 'https://www.papajohns.com/static-assets/a/images/web/product/pizzas/sma_GardenFresh-compressed.jpg'
        },
        {
          item: 'SPINACH ALFREDO',
          detail: 'Delicious doesn’t have to be complicated. This irresistible pizza has a rich and creamy blend of spinach and garlic Parmesan Alfredo sauce topped with real cheese made from mozzarella.',
          size: '18in Large',
          price: 19.99,
          image: 'https://www.papajohns.com/static-assets/a/images/web/product/pizzas/std_SpinAlf-compressed.jpg'
        },
      ]);
    });
};
