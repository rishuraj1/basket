const products = [
  {
    id: 1,
    type: "stationery",
    original_price: 12.99,
    discounted_price: 9.99,
    availability: "In Stock",
    title: "Notebook",
    description:
      "A high-quality notebook perfect for jotting down thoughts, ideas, and notes. It features durable paper and a sleek design, ideal for students or professionals.",
    main_image:
      "https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    other_images: [
      "https://images.pexels.com/photos/942872/pexels-photo-942872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/998589/pexels-photo-998589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
  },
  {
    id: 2,
    type: "office",
    original_price: 199.99,
    discounted_price: 149.99,
    availability: "Out of Stock",
    title: "Office Chair",
    description:
      "A comfortable and ergonomic office chair that provides excellent lumbar support. It features adjustable armrests, a reclining backrest, and a padded seat cushion.",
    main_image:
      "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    other_images: [
      "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1181657/pexels-photo-1181657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    offer: "25% Off",
  },
  {
    id: 3,
    type: "home",
    original_price: 299.99,
    discounted_price: 249.99,
    availability: "In Stock",
    title: "Coffee Maker",
    description:
      "A high-quality coffee maker that brews delicious coffee in minutes. It features a programmable timer, a warming plate, and a reusable filter.",
    main_image:
      "https://images.pexels.com/photos/2147683/pexels-photo-2147683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    other_images: [
      "https://images.pexels.com/photos/2067628/pexels-photo-2067628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2668498/pexels-photo-2668498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
  },
  {
    id: 4,
    type: "fashion",
    original_price: 59.99,
    discounted_price: 39.99,
    availability: "In Stock",
    title: "Denim Jacket",
    description:
      "A stylish and versatile denim jacket that pairs well with any outfit. It features a classic design, durable denim fabric, and a comfortable fit.",
    main_image:
      "https://images.pexels.com/photos/2229712/pexels-photo-2229712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    other_images: [
      "https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1105058/pexels-photo-1105058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    new_arrival: true,
    offer: "30% Off",
  },
  {
    id: 5,
    type: "stationery",
    original_price: 24.99,
    discounted_price: 19.99,
    availability: "In Stock",
    title: "Desk Organizer",
    description:
      "A stylish and functional desk organizer that keeps your workspace clutter-free. It features multiple compartments, a drawer, and a sturdy construction.",
    main_image:
      "https://images.pexels.com/photos/5797899/pexels-photo-5797899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    other_images: [
      "https://images.pexels.com/photos/5797900/pexels-photo-5797900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/9429448/pexels-photo-9429448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
  },
  {
    id: 6,
    type: "office",
    original_price: 99.99,
    discounted_price: 79.99,
    availability: "In Stock",
    title: "Desk Lamp",
    description:
      "A modern and energy-efficient desk lamp that provides bright and adjustable lighting. It features a sleek design, touch controls, and a USB charging port.",
    main_image:
      "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    other_images: [
      "https://images.pexels.com/photos/823841/pexels-photo-823841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2168382/pexels-photo-2168382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
  },
  {
    id: 7,
    type: "home",
    original_price: 89.99,
    discounted_price: 69.99,
    availability: "Out of Stock",
    title: "Blender",
    description:
      "A powerful and versatile blender that can handle a variety of tasks. It features multiple speed settings, a pulse function, and a durable glass pitcher.",
    main_image:
      "https://images.pexels.com/photos/3094227/pexels-photo-3094227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    other_images: [
      "https://images.pexels.com/photos/3094227/pexels-photo-3094227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/8805075/pexels-photo-8805075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    offer: "10% Off",
  },
  {
    id: 8,
    type: "fashion",
    original_price: 79.99,
    discounted_price: 59.99,
    availability: "In Stock",
    title: "Sneakers",
    description:
      "A pair of stylish and comfortable sneakers that are perfect for everyday wear. They feature a cushioned sole, breathable fabric, and a modern design.",
    main_image:
      "https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    other_images: [
      "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1102777/pexels-photo-1102777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
  },
  {
    id: 9,
    type: "stationery",
    original_price: 14.99,
    discounted_price: 11.99,
    availability: "In Stock",
    title: "Pen Set",
    description:
      "A set of high-quality pens that are perfect for writing, drawing, and sketching. They feature smooth ink flow, comfortable grips, and durable tips.",
    main_image:
      "https://images.pexels.com/photos/6044286/pexels-photo-6044286.jpeg?auto=compress&cs=tinysrgb&w=600",
    other_images: [
      "https://images.pexels.com/photos/5594336/pexels-photo-5594336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6373488/pexels-photo-6373488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
  },
  {
    id: 10,
    type: "office",
    original_price: 499.99,
    discounted_price: 449.99,
    availability: "In Stock",
    title: "Standing Desk",
    description:
      "A height-adjustable standing desk that promotes a healthy and active work environment. It features a spacious desktop, sturdy construction, and smooth adjustments.",
    main_image:
      "https://images.pexels.com/photos/8001036/pexels-photo-8001036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    other_images: [
      "https://images.pexels.com/photos/8001034/pexels-photo-8001034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
  },
  {
    id: 11,
    type: "home",
    original_price: 49.99,
    discounted_price: 39.99,
    availability: "In Stock",
    title: "Toaster",
    description:
      "A high-quality toaster that can handle a variety of breads and pastries. It features multiple settings, a removable crumb tray, and a sleek design.",
    main_image:
      "https://images.pexels.com/photos/5825716/pexels-photo-5825716.jpeg?auto=compress&cs=tinysrgb&w=600",
    other_images: [
      "https://images.pexels.com/photos/7936636/pexels-photo-7936636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5825406/pexels-photo-5825406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
  },
  {
    id: 12,
    type: "fashion",
    original_price: 99.99,
    discounted_price: 79.99,
    availability: "In Stock",
    title: "Leather Belt",
    description:
      "A classic leather belt that adds style and sophistication to any outfit. It features a durable buckle, genuine leather, and a timeless design.",
    main_image:
      "https://assets.ajio.com/medias/sys_master/root/20220201/fhxh/61f95f4daeb26921af853402/-473Wx593H-469120759-black-MODEL.jpg",
    other_images: [
      "https://assets.ajio.com/medias/sys_master/root/20220201/h8UV/61f953f0aeb26921af84fe9c/-473Wx593H-469120759-black-MODEL3.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20220201/h8UV/61f953f0aeb26921af84fe9c/-473Wx593H-469120759-black-MODEL3.jpg",
    ],
  },
  {
    id: 13,
    type: "stationery",
    original_price: 19.99,
    discounted_price: 14.99,
    availability: "Out of Stock",
    title: "Highlighter Set",
    description:
      "A set of vibrant highlighters that are perfect for highlighting notes, textbooks, and documents. They feature quick-drying ink, chisel tips, and a comfortable grip.",
    main_image:
      "https://images.pexels.com/photos/6368836/pexels-photo-6368836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    other_images: [
      "https://images.pexels.com/photos/6368829/pexels-photo-6368829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6368829/pexels-photo-6368829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
  },
  {
    id: 14,
    type: "office",
    original_price: 29.99,
    discounted_price: 24.99,
    availability: "In Stock",
    title: "Mouse Pad",
    description:
      "A high-quality mouse pad that provides a smooth and precise mousing surface. It features a non-slip base, durable fabric, and a stylish design.",
    main_image:
      "https://images.unsplash.com/photo-1587749091716-f7b291a87f87?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    other_images: [
      "https://images.unsplash.com/photo-1631098983935-5363b8e50edb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 15,
    type: "home",
    original_price: 199.99,
    discounted_price: 179.99,
    availability: "In Stock",
    title: "Air Purifier",
    description:
      "A high-quality air purifier that removes dust, allergens, and odors from the air. It features a HEPA filter, multiple fan speeds, and a sleek design.",
    main_image:
      "https://plus.unsplash.com/premium_photo-1661315526732-271aa84f480d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    other_images: [
      "https://images.unsplash.com/photo-1436473849883-bb3464c23e93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1469365556835-3da3db4c253b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 16,
    type: "fashion",
    original_price: 49.99,
    discounted_price: 34.99,
    availability: "In Stock",
    title: "T-shirt",
    description:
      "A comfortable and stylish t-shirt that is perfect for everyday wear. It features a soft fabric, a classic fit, and a versatile design.",
    main_image:
      "https://images.unsplash.com/photo-1469365556835-3da3db4c253b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    other_images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 17,
    type: "stationery",
    original_price: 9.99,
    discounted_price: 7.99,
    availability: "In Stock",
    title: "Stapler",
    description:
      "A durable and reliable stapler that is perfect for home, school, or office use. It features a comfortable grip, a staple remover, and a sturdy construction.",
    main_image:
      "https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    other_images: [
      "https://images.unsplash.com/photo-1603234408844-15d80c40d580?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596213812335-ac67c2d653d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 18,
    type: "office",
    original_price: 79.99,
    discounted_price: 59.99,
    availability: "Out of Stock",
    title: "Paper Shredder",
    description:
      "A heavy-duty paper shredder that can handle multiple sheets of paper at once. It features a cross-cut shredding mechanism, a large waste bin, and a compact design.",
    main_image:
      "https://images.unsplash.com/photo-1596213812335-ac67c2d653d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    other_images: [
      "https://b1823587.smushcdn.com/1823587/wp-content/uploads/2018/10/Small-Industrial-Paper-Shredder.-300x320.jpg?lossy=2&strip=1&webp=1",
      "https://b1823587.smushcdn.com/1823587/wp-content/uploads/2018/10/Small-Industrial-Paper-Shredder-shredding-process1.jpg?lossy=2&strip=1&webp=1",
    ],
  },
  {
    id: 19,
    type: "home",
    original_price: 129.99,
    discounted_price: 99.99,
    availability: "In Stock",
    title: "Vacuum Cleaner",
    description:
      "A powerful and versatile vacuum cleaner that can handle a variety of surfaces. It features multiple attachments, a HEPA filter, and a bagless design.",
    main_image:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmFjY3VtJTIwY2xlYW5lcnxlbnwwfHwwfHx8MA%3D%3D",
    other_images: [
      "https://images.unsplash.com/photo-1603618090561-412154b4bd1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmFjY3VtJTIwY2xlYW5lcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1590164409291-450e859ccb87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmFjY3VtJTIwY2xlYW5lcnxlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
  {
    id: 20,
    type: "fashion",
    original_price: 149.99,
    discounted_price: 129.99,
    availability: "In Stock",
    title: "Wristwatch",
    description:
      "A stylish and sophisticated wristwatch that is perfect for any occasion. It features a stainless steel case, a leather strap, and a precise quartz movement.",
    main_image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3QlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    other_images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3QlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d3Jpc3QlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    offer: "20% Off",
  },
  {
    id: 21,
    type: "stationery",
    original_price: 5.99,
    discounted_price: 4.99,
    availability: "In Stock",
    title: "Glue Stick",
    description:
      "A versatile and easy-to-use glue stick that is perfect for arts and crafts projects. It features a non-toxic formula, a twist-up design, and a strong bond.",
    main_image:
      "https://images.unsplash.com/photo-1587145717234-bc7fae25ed38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2x1ZSUyMHN0aWNrfGVufDB8fDB8fHww",
    other_images: [
      "https://images.unsplash.com/photo-1587145717234-bc7fae25ed38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2x1ZSUyMHN0aWNrfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1587145717234-bc7fae25ed38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2x1ZSUyMHN0aWNrfGVufDB8fDB8fHww",
    ],
  },
  {
    id: 22,
    type: "office",
    original_price: 39.99,
    discounted_price: 29.99,
    availability: "In Stock",
    title: "Desk Fan",
    description:
      "A compact and powerful desk fan that provides cool and refreshing air. It features multiple speed settings, an adjustable tilt, and a quiet operation.",
    main_image:
      "https://images.unsplash.com/photo-1523437345381-db5ee4df9c04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGVzayUyMGZhbnxlbnwwfHwwfHx8MA%3D%3D",
    other_images: [
      "https://images.pexels.com/photos/3675622/pexels-photo-3675622.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/5850342/pexels-photo-5850342.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  {
    id: 23,
    type: "home",
    original_price: 79.99,
    discounted_price: 59.99,
    availability: "In Stock",
    title: "Electric Kettle",
    description:
      "A high-quality electric kettle that boils water quickly and efficiently. It features a stainless steel body, a cordless design, and an automatic shut-off.",
    main_image:
      "https://plus.unsplash.com/premium_photo-1663133646496-f74226a2b263?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    other_images: [
      "https://images.unsplash.com/photo-1571552879083-e93b6ea70d1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlY3RyaWMlMjBrZXR0bGV8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1715774735265-92a0305302ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3RyaWMlMjBrZXR0bGV8ZW58MHx8MHx8fDA%3D",
    ],
    offer: "Buy 1 Get 1 Free",
  },
  {
    id: 24,
    type: "fashion",
    original_price: 69.99,
    discounted_price: 49.99,
    availability: "In Stock",
    title: "Scarf",
    description:
      "A stylish and versatile scarf that adds a pop of color to any outfit. It features a soft fabric, a classic design, and a lightweight feel.",
    main_image:
      "https://plus.unsplash.com/premium_photo-1673286712645-9600beaa4a92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2NhcmZ8ZW58MHx8MHx8fDA%3D",
    other_images: [
      "https://images.unsplash.com/photo-1457545195570-67f207084966?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NhcmZ8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1673286712645-9600beaa4a92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2NhcmZ8ZW58MHx8MHx8fDA%3D",
    ],
  },
  {
    id: 25,
    type: "stationery",
    original_price: 2.99,
    discounted_price: 1.99,
    availability: "In Stock",
    title: "Eraser",
    description:
      "A high-quality eraser that removes pencil marks cleanly and easily. It features a soft texture, a durable construction, and a compact size.",
    main_image:
      "https://images.pexels.com/photos/35202/eraser-office-supplies-office-office-accessories.jpg?auto=compress&cs=tinysrgb&w=600",
    other_images: [
      "https://images.pexels.com/photos/35202/eraser-office-supplies-office-office-accessories.jpg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/35202/eraser-office-supplies-office-office-accessories.jpg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  {
    id: 26,
    type: "office",
    original_price: 69.99,
    discounted_price: 54.99,
    availability: "Out of Stock",
    title: "Keyboard",
    description:
      "A high-quality keyboard that provides a comfortable typing experience. It features a compact design, quiet keys, and a durable construction.",
    main_image:
      "https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
    other_images: [
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
    ],
  },
  {
    id: 27,
    type: "home",
    original_price: 149.99,
    discounted_price: 129.99,
    availability: "In Stock",
    title: "Microwave Oven",
    description:
      "A high-quality microwave oven that can handle a variety of cooking tasks. It features multiple power levels, a digital display, and a compact design.",
    main_image:
      "https://images.pexels.com/photos/5591849/pexels-photo-5591849.jpeg?auto=compress&cs=tinysrgb&w=600",
    other_images: [
      "https://images.pexels.com/photos/7195851/pexels-photo-7195851.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7195851/pexels-photo-7195851.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    new_arrival: true,
  },
  {
    id: 28,
    type: "fashion",
    original_price: 89.99,
    discounted_price: 69.99,
    availability: "In Stock",
    title: "Handbag",
    description:
      "A stylish and versatile handbag that is perfect for everyday use. It features a spacious interior, multiple compartments, and a durable construction.",
    main_image:
      "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=600",
    other_images: [
      "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
  {
    id: 29,
    type: "stationery",
    original_price: 34.99,
    discounted_price: 29.99,
    availability: "In Stock",
    title: "Art Supplies Kit",
    description:
      "A complete art supplies kit that includes a variety of tools and materials for drawing, painting, and sketching. It features pencils, markers, brushes, and more.",
    main_image:
      "https://plus.unsplash.com/premium_photo-1673467011288-462c72c5ec69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0JTIwc3VwcGxpZXMlMjBraXR8ZW58MHx8MHx8fDA%3D",
    other_images: [
      "https://images.unsplash.com/photo-1588014327969-38ff21885b62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0JTIwc3VwcGxpZXMlMjBraXR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1588014327969-38ff21885b62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0JTIwc3VwcGxpZXMlMjBraXR8ZW58MHx8MHx8fDA%3D",
    ],
  },
  {
    id: 30,
    type: "home",
    original_price: 59.99,
    discounted_price: 49.99,
    availability: "In Stock",
    title: "Iron",
    description:
      "A high-quality iron that provides powerful steam and smooth gliding for wrinkle-free clothes. It features multiple temperature settings, a non-stick soleplate, and a comfortable grip.",
    main_image:
      "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=600",
    other_images: [
      "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.unsplash.com/photo-1611090925566-b1fc31065f63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXJvbnxlbnwwfHwwfHx8MA%3D%3D",
    ],
    new_arrival: true,
  },
];

export default products;
