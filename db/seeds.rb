# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'open-uri'
ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Product.destroy_all
    Category.destroy_all
    Review.destroy_all
    CartItem.destroy_all

  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('products')
    ApplicationRecord.connection.reset_pk_sequence!('categories')
    ApplicationRecord.connection.reset_pk_sequence!('reviews')
    ApplicationRecord.connection.reset_pk_sequence!('cart_items')

    puts "Creating users..."

    # Create one user with an easy to remember username, email, and password:
    u1 = User.create!( 
      email: 'zoubug@gmail.com', 
      first_name: 'Zuzu',
      last_name: 'Chaoui',
      password: '123456'
    )

    u2 = User.create!( 
      email: 'milka@yahoo.fr', 
      first_name: 'Marc',
      last_name: 'Den',
      password: '123456'
    )

    u3 = User.create!( 
        email: 'mars@hotmail.fr', 
        first_name: 'Leila',
        last_name: 'Dal',
        password: '123456'
    )

    u4 = User.create!( 
        email: 'lion@gmail.com', 
        first_name: 'Mel',
        last_name: 'Hub',
        password: '123456'
    )

    u5 = User.create!( 
        email: 'kinder@love.io', 
        first_name: 'Jen',
        last_name: 'Noraw',
        password: '123456'
    )
  
    # More users
    15.times do 
      User.create!({
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        email: Faker::Internet.unique.email,
        password: '123456'
      }) 
    end
    

    c1 = Category.create!(
      name: "All Product",
      description: "All Product"
    )
    c2 = Category.create!(
      name: "Dark Chocolate Truffles",
      description: "Curated assortments of dark chocolate truffles with rich, mouth-melting fillings."
    )
    c3 = Category.create!(
      name: "Bars",
      description: "Handmade chocolate bars with deeply decadent fillings. Artfully painted with cocoa butter."
    )
    c4 = Category.create!(
      name: "Chocolate Boxes & Sets",
      description: "Chocolate Boxes & Sets"
    )
    c5 = Category.create!(
      name: "Gifts",
      description: "Gifts"
    )
    p1 = Product.create!(
      name: 'Coconut Passionfruit Chocolate Bars',
      description: 'A delicious balance of bright tropical flavors and deeply decadent chocolate,creamy coconut white chocolate ganache with rich passionfruit caramel and milk chocolate crunch.',
      price: 14.00,
      category_id: 2
    )
    file1 = URI.open('https://bel-chocolate-seeds.s3.us-west-1.amazonaws.com/p1.jpeg')
    p1.picture.attach(io: file1, filename: 'p1.jpeg')

    p2 = Product.create!(
      name: 'Dark Chocolate Truffles: 16 pieces',
      description: 'A curated assortment of dark chocolate truffles in vivid flavors from comforting and creamy ganaches, to rich umami fillings and delightful floral crunches.',
      price: 42.00,
      category_id: 1
    )
    file2 = URI.open('https://bel-chocolate-seeds.s3.us-west-1.amazonaws.com/p2.jpeg')
    p2.picture.attach(io: file2, filename: 'p2.jpeg')

    p3 = Product.create!(
      name: 'Dark Chocolate Truffles: 24 pieces',
      description: 'A curated assortment of dark chocolate truffles in vivid flavors from comforting and creamy ganaches, to rich umami fillings and delightful floral crunches.',
      price: 56.00,
      category_id: 1
    )
    file3 = URI.open('https://bel-chocolate-seeds.s3.us-west-1.amazonaws.com/p3.jpeg')
    p3.picture.attach(io: file3, filename: 'p3.jpeg')

    p4 = Product.create!(
      name: 'Dark Chocolate Truffles: 6 pieces',
      description: 'This is a mouth-melting gourmet chocolate box for curious food lovers.',
      price: 19.00,
      category_id: 1
    )
    file4 = URI.open('https://bel-chocolate-seeds.s3.us-west-1.amazonaws.com/p4.jpeg')
    p4.picture.attach(io: file4, filename: 'p4.jpeg')

    p5 = Product.create!(
      name: 'Espresso Chocolate Bar',
      description: 'A decadent 70% dark chocolate bar filled with rich coffee ganache and crunchy cocoa nibs, this is a warming pick-me-up for espresso and chocolate lovers.',
      price: 14.00,
      category_id: 2
    )
    file5 = URI.open('https://bel-chocolate-seeds.s3.us-west-1.amazonaws.com/p5.jpeg')
    p5.picture.attach(io: file5, filename: 'p5.jpeg')

    p6 = Product.create!(
      name: 'Strawberry Almond Chocolate Bars',
      description: 'Vivid Strawberry jam with toasty almond nougat on a crunchy chocolate shortbread base, a chocolatey PB&J fit for a king, queen, and everyone in-between.',
      price: 14.00,
      category_id: 2
    )
    file6 = URI.open('https://bel-chocolate-seeds.s3.us-west-1.amazonaws.com/p6.jpeg')
    p6.picture.attach(io: file6, filename: 'p6.jpeg')


    p7 = Product.create!(
      name: 'Topogato E-Gift Card',
      description: 'They deserve handmade chocolate sweet treats, perfect for celebratory and thank you gifts, this e-gift card is conveniently sent to the recipient via email. The lucky receiver can easily order chocolate online.',
      price: 25.00,
      category_id: 5
    )
    file7 = URI.open('https://bel-chocolate-seeds.s3.us-west-1.amazonaws.com/p7.jpeg')
    p7.picture.attach(io: file7, filename: 'p7.jpeg')

    p8 = Product.create!(
      name: 'Topogato Hat',
      description: '100% twill 6-panel hat in off-white with an embroidered Topogato logo and adjustable buckle closure',
      price: 25.00,
      category_id: 5
    )
    file8 = URI.open('https://bel-chocolate-seeds.s3.us-west-1.amazonaws.com/p8.jpeg')
    p8.picture.attach(io: file8, filename: 'p8.jpeg')

    p9 = Product.create!(
      name: 'Topogato Tote',
      description: '12oz. 100% heavy cotton canvas tote in off-white with a screenprinted Topogato logo and matching 20" web canvas handles.',
      price: 12.00,
      category_id: 5
    )
    file9 = URI.open('https://bel-chocolate-seeds.s3.us-west-1.amazonaws.com/p9.jpeg')
    p9.picture.attach(io: file9, filename: 'p9.jpeg')

    p10 = Product.create!(
      name: 'Vegan Dark Chocolate Truffles: 9 pieces',
      description: 'A curated assortment of vegan dark chocolate truffles in three deeply decadent flavors, this is a mouth-melting vegan chocolate box for serious food lovers.',
      price: 24.00,
      category_id: 1
    )
    file10 = URI.open('https://bel-chocolate-seeds.s3.us-west-1.amazonaws.com/9_Vegan_Chocolate_Truffles_600x.jpeg')
    p10.picture.attach(io: file10, filename: '9_Vegan_Chocolate_Truffles_600x.jpeg')

    p11 = Product.create!(
      name: 'Deep Flavor Experience” Chocolate Gift Box',
      description: 'An experiential chocolate gift box with flavor profiles & eye candy that cant be found elsewhere. Vivid flavors, comforting & creamy ganaches, and delightful crunches.',
      price: 74.00,
      category_id: 3
    )
    file11 = URI.open('https://bel-chocolate-seeds.s3.us-west-1.amazonaws.com/san_francisco_chocolate_gift_box_600x.jpeg')
    p11.picture.attach(io: file11, filename: 'san_francisco_chocolate_gift_box_600x.jpeg')

    p12 = Product.create!(
      name: 'Mouse” by Beau Monroe',
      description: '8” x 10” giclée art print on heavy 285gsm natural warm white paper. Signed, open edition.',
      price: 19.00,
      category_id: 5
    )
    file12 = URI.open('https://bel-chocolate-seeds.s3.us-west-1.amazonaws.com/Mouse_Art_Print_600x.jpeg')
    p12.picture.attach(io: file12, filename: 'Mouse_Art_Print_600x.jpeg')

    p13 = Product.create!(
      name: 'New Sensations” Chocolate Box',
      description: 'A gourmet chocolate box unlike any other. We will let the flavors tell the story; each with a decadent 70% dark chocolate shell',
      price: 34.00,
      category_id: 3
    )
    file13 = URI.open('https://bel-chocolate-seeds.s3.us-west-1.amazonaws.com/gourmet_chocolate_box_600x.jpeg')
    p13.picture.attach(io: file13, filename: 'gourmet_chocolate_box_600x.jpeg')

    p14 = Product.create!(
      name: 'New Sensations” Chocolate Box Mini',
      description: 'A gourmet chocolate box unlike any other. We will let the flavors tell the story; each with a decadent 70% dark chocolate shell',
      price: 16.00,
      category_id: 3
    )
    file14 = URI.open('https://bel-chocolate-seeds.s3.us-west-1.amazonaws.com/gourmet_chocolate_box_mini_600x.jpeg')
    p14.picture.attach(io: file14, filename: 'gourmet_chocolate_box_mini_600x.jpeg')

    p15 = Product.create!(
      name: 'Rosebud” by Beau Monroe',
      description: 'A gourmet chocolate box unlike any other. We will let the flavors tell the story; each with a decadent 70% dark chocolate shell',
      price: 19.00,
      category_id: 5
    )
    file15 = URI.open('https://bel-chocolate-seeds.s3.us-west-1.amazonaws.com/Rosebud_Art_Print_600x.jpeg')
    p15.picture.attach(io: file15, filename: 'Rosebud_Art_Print_600x.jpeg')


    r1 = Review.create!(
      rating: 4,
      title: 'Chocolate Heaven',
      body: 'Was excited to find them available is bulk through belChocolate website. They are fresh and delicious. Will definetly keep buying them while available.',
      user_id: 1,
      product_id: 3
    )

    r2 = Review.create!(
      rating: 5,
      title: 'the best ever',
      body: 'Delicious. Dreamy. Will be continuing my supply of these sweet treats.',
      user_id: 1,
      product_id: 5
    )

    r3 = Review.create!(
      rating: 5,
      title: 'Great For A Family Gathering!',
      body: 'I purchased this for a family gathering. It was fun to see family members of all ages light up as they looked for their favorite candies. Excellent quality, great presentation!.',
      user_id: 3,
      product_id: 11
    )

    r4 = Review.create!(
      rating: 1,
      title: 'Gold Elegance',
      body: 'Very disappointed. Too many nuts - not enough of the filled chocolates.',
      user_id: 4,
      product_id: 14
    )

    r5 = Review.create!(
      rating: 1,
      title: 'SAD Chocolate & Customer Service',
      body: 'When we received, the chocolate was tossed about and broken up. It was also discolored around the edges of several pieces. (White color)
      I emailed twice with no response.',
      user_id: 7,
      product_id: 6
    )

    r6 = Review.create!(
      rating: 2,
      title: 'Unhappy Customer',
      body: "did't like it at all.",
      user_id: 15,
      product_id: 1
    )

    r7 = Review.create!(
      rating: 5,
      title: 'My New Favorite!',
      body: "Even though I am not a fan of truffles with different color. This one was amazing.",
      user_id: 1,
      product_id: 2
    )

    r8 = Review.create!(
      rating: 2,
      title: 'Always A Favorite!',
      body: "Seriously, It's been a family Favorite, MY fave since forever!.",
      user_id: 11,
      product_id: 5
    )

    r9 = Review.create!(
      rating: 5,
      title: 'Must Try',
      body: "BelChocolate has been our family favorite for decades. If there is one candy in the entire world that would devastate me to never have again, it would be this one!.",
      user_id: 20,
      product_id: 7
    )

    r10 = Review.create!(
      rating: 5,
      title: 'Possibly The Best Chocolate Ever',
      body: "BelChocolate are the best chocolates that you can buy. Period. Of the many great flavors.",
      user_id: 17,
      product_id: 11
    )

    r11 = Review.create!(
      rating: 5,
      title: 'Best Snack Item',
      body: 'They are the best item to put in my desk and snack on throughout the day.',
      user_id: 2,
      product_id: 2
    )
    r12 = Review.create!(
      rating: 4,
      title: 'Amazing',
      body: "I received a bag from my lawyer when I was on my way to work overnight. They are fabulous. they are light and airy and smooth. I may replace my coffee habit with these chocolate covered beans. I've even turned my coworkers on to them. everyone loves them!",
      user_id: 13,
      product_id: 7
    )

    r13 = Review.create!(
      rating: 2,
      title: 'Delicious But..',
      body: "The taste is pratty bad",
      user_id: 3,
      product_id: 8
    )

    r14 = Review.create!(
      rating: 2,
      title: 'Never again',
      body: "did,'t like it at all.",
      user_id: 15,
      product_id: 6
    )

    r15 = Review.create!(
      rating: 2,
      title: 'Getting Too Expensive',
      body: "The chocolate is too tiny.",
      user_id: 13,
      product_id: 1
    )

    r16 = Review.create!(
      rating: 4,
      title: 'My New Favorite!',
      body: "Love this newest variety pack! It quickly became my very favorite combination of all time. Please make it a permanent offering!",
      user_id: 1,
      product_id: 6
    )

    r17 = Review.create!(
      rating: 3,
      title: 'Recipe Changed',
      body: "I have ordered many different combinations. however this is not recommended",
      user_id: 3,
      product_id: 4
    )

    r18 = Review.create!(
      rating: 5,
      title: 'the best ever',
      body: 'Delicious. Dreamy. Will be continuing my supply of these sweet treats.',
      user_id: 1,
      product_id: 1
    ) 

    c1 = CartItem.create!(
      quantity: 2,
      user_id: 1,
      product_id: 1,
    )
    c1 = CartItem.create!(
      quantity: 4,
      user_id: 1,
      product_id: 2,
    )
    c2 = CartItem.create!(
      quantity: 2,
      user_id: 2,
      product_id: 3,
    )
    c2 = CartItem.create!(
      quantity: 4,
      user_id: 2,
      product_id: 4,
    )
    c3 = CartItem.create!(
      quantity: 2,
      user_id: 3,
      product_id: 5,
    )
    c3 = CartItem.create!(
      quantity: 4,
      user_id: 3,
      product_id: 6,
    )

    c4 = CartItem.create!(
      quantity: 2,
      user_id: 4,
      product_id: 7,
    )
    c4 = CartItem.create!(
      quantity: 4,
      user_id: 4,
      product_id: 8,
    )
    c5 = CartItem.create!(
      quantity: 2,
      user_id: 5,
      product_id: 9,
    )
    c5 = CartItem.create!(
      quantity: 4,
      user_id: 5,
      product_id: 10,
    )
    c6 = CartItem.create!(
      quantity: 2,
      user_id: 6,
      product_id: 11,
    )
    c6 = CartItem.create!(
      quantity: 4,
      user_id: 6,
      product_id: 12,
    )
    c16 = CartItem.create!(
      quantity: 2,
      user_id: 6,
      product_id: 13,
    )
    c6 = CartItem.create!(
      quantity: 4,
      user_id: 6,
      product_id: 14,
    )
    c7 = CartItem.create!(
      quantity: 2,
      user_id: 7,
      product_id: 15,
    )
    c7 = CartItem.create!(
      quantity: 4,
      user_id: 7,
      product_id: 1,
    )
    c8 = CartItem.create!(
      quantity: 2,
      user_id: 8,
      product_id: 2,
    )
    c8 = CartItem.create!(
      quantity: 4,
      user_id: 8,
      product_id: 3,
    )
    c9 = CartItem.create!(
      quantity: 2,
      user_id: 9,
      product_id: 1,
    )
    c9 = CartItem.create!(
      quantity: 4,
      user_id: 9,
      product_id: 2,
    )
    c10 = CartItem.create!(
      quantity: 2,
      user_id: 10,
      product_id: 3,
    )
    c10 = CartItem.create!(
      quantity: 4,
      user_id: 10,
      product_id: 4,
    )

    c11 = CartItem.create!(
      quantity: 2,
      user_id: 11,
      product_id: 5,
    )
    c11 = CartItem.create!(
      quantity: 4,
      user_id: 11,
      product_id: 6,
    )
    c12 = CartItem.create!(
      quantity: 2,
      user_id: 12,
      product_id: 7,
    )
    c12 = CartItem.create!(
      quantity: 4,
      user_id: 12,
      product_id: 8,
    )
    c13 = CartItem.create!(
      quantity: 2,
      user_id: 13,
      product_id: 9,
    )
    c13 = CartItem.create!(
      quantity: 4,
      user_id: 13,
      product_id: 10,
    )
    c14 = CartItem.create!(
      quantity: 2,
      user_id: 14,
      product_id: 11,
    )
    c14 = CartItem.create!(
      quantity: 4,
      user_id: 14,
      product_id: 12,
    )
    c15 = CartItem.create!(
      quantity: 2,
      user_id: 15,
      product_id: 13,
    )
    c15 = CartItem.create!(
      quantity: 4,
      user_id: 15,
      product_id: 14,
    )
    c16= CartItem.create!(
      quantity: 2,
      user_id: 16,
      product_id: 15,
    )
    c16 = CartItem.create!(
      quantity: 4,
      user_id: 16,
      product_id: 6,
    )
    c17 = CartItem.create!(
      quantity: 2,
      user_id: 17,
      product_id: 13,
    )
    c17 = CartItem.create!(
      quantity: 4,
      user_id: 17,
      product_id: 14,
    )
    c18 = CartItem.create!(
      quantity: 2,
      user_id: 18,
      product_id: 7,
    )
    c18 = CartItem.create!(
      quantity: 4,
      user_id: 18,
      product_id: 4,
    )
    c19 = CartItem.create!(
      quantity: 2,
      user_id: 19,
      product_id: 8,
    )
    c19 = CartItem.create!(
      quantity: 4,
      user_id: 19,
      product_id: 10,
    )
    c20 = CartItem.create!(
      quantity: 2,
      user_id: 20,
      product_id: 15,
    )
    c20 = CartItem.create!(
      quantity: 4,
      user_id: 20,
      product_id: 1,
    )
    puts "Done!"
end
