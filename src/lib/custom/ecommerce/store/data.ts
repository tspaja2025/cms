export const orders = [
	{
		id: 'ORD-4872',
		customer: 'Sarah Wilson',
		date: '2023-08-15T10:30:00',
		total: 129.99,
		status: 'Delivered',
		items: 3,
		email: 'sarah.w@example.com'
	},
	{
		id: 'ORD-4871',
		customer: 'Michael Brown',
		date: '2023-08-15T09:45:00',
		total: 79.85,
		status: 'Processing',
		items: 2,
		email: 'michael.b@example.com'
	},
	{
		id: 'ORD-4870',
		customer: 'Emma Johnson',
		date: '2023-08-15T08:20:00',
		total: 245.0,
		status: 'Pending',
		items: 4,
		email: 'emma.j@example.com'
	},
	{
		id: 'ORD-4869',
		customer: 'David Lee',
		date: '2023-08-14T16:50:00',
		total: 189.99,
		status: 'Delivered',
		items: 1,
		email: 'david.l@example.com'
	},
	{
		id: 'ORD-4868',
		customer: 'Jennifer Smith',
		date: '2023-08-14T14:25:00',
		total: 62.5,
		status: 'Cancelled',
		items: 2,
		email: 'jennifer.s@example.com'
	},
	{
		id: 'ORD-4867',
		customer: 'Robert Johnson',
		date: '2023-08-13T11:15:00',
		total: 149.99,
		status: 'Delivered',
		items: 1,
		email: 'robert.j@example.com'
	},
	{
		id: 'ORD-4866',
		customer: 'Lisa Anderson',
		date: '2023-08-13T10:05:00',
		total: 95.5,
		status: 'Processing',
		items: 3,
		email: 'lisa.a@example.com'
	},
	{
		id: 'ORD-4865',
		customer: 'Thomas Wilson',
		date: '2023-08-12T15:30:00',
		total: 210.25,
		status: 'Delivered',
		items: 2,
		email: 'thomas.w@example.com'
	},
	{
		id: 'ORD-4864',
		customer: 'Jessica Miller',
		date: '2023-08-12T09:45:00',
		total: 75.99,
		status: 'Delivered',
		items: 1,
		email: 'jessica.m@example.com'
	},
	{
		id: 'ORD-4863',
		customer: 'Daniel Brown',
		date: '2023-08-11T14:20:00',
		total: 324.75,
		status: 'Cancelled',
		items: 4,
		email: 'daniel.b@example.com'
	}
];

export const products = [
	{
		id: 1,
		name: 'Wireless Headphones',
		image:
			'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
		price: 149.99,
		sold: 1254,
		revenue: 188097.46,
		status: 'In Stock'
	},
	{
		id: 2,
		name: 'Smart Watch',
		image:
			'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
		price: 299.99,
		sold: 879,
		revenue: 263691.21,
		status: 'In Stock'
	},
	{
		id: 3,
		name: 'Bluetooth Speaker',
		image:
			'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
		price: 89.99,
		sold: 1056,
		revenue: 95029.44,
		status: 'Low Stock'
	},
	{
		id: 4,
		name: 'Laptop Backpack',
		image:
			'https://images.pexels.com/photos/1294731/pexels-photo-1294731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
		price: 79.99,
		sold: 932,
		revenue: 74550.68,
		status: 'In Stock'
	},
	{
		id: 5,
		name: 'Mechanical Keyboard',
		image:
			'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
		price: 129.99,
		sold: 645,
		revenue: 83843.55,
		status: 'Out of Stock'
	},
	{
		id: 6,
		name: 'Ergonomic Office Chair',
		image:
			'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
		price: 249.99,
		inventory: 12,
		status: 'In Stock'
	},
	{
		id: 7,
		name: 'Smartphone Stand',
		image:
			'https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
		price: 24.99,
		inventory: 87,
		status: 'In Stock'
	},
	{
		id: 8,
		name: 'Wireless Charger',
		image:
			'https://images.pexels.com/photos/4526482/pexels-photo-4526482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
		price: 39.99,
		inventory: 41,
		status: 'In Stock'
	}
];

export const customers = [
	{
		id: 1,
		name: 'Sarah Wilson',
		email: 'sarah.w@example.com',
		location: 'New York, USA',
		orders: 12,
		spent: 1258.99,
		lastOrder: '2023-08-15T10:30:00',
		status: 'Active',
		avatar:
			'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
	},
	{
		id: 2,
		name: 'Michael Brown',
		email: 'michael.b@example.com',
		location: 'London, UK',
		orders: 8,
		spent: 879.85,
		lastOrder: '2023-08-15T09:45:00',
		status: 'Active',
		avatar:
			'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
	},
	{
		id: 3,
		name: 'Emma Johnson',
		email: 'emma.j@example.com',
		location: 'Sydney, Australia',
		orders: 5,
		spent: 495.5,
		lastOrder: '2023-08-15T08:20:00',
		status: 'Active',
		avatar:
			'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
	},
	{
		id: 4,
		name: 'David Lee',
		email: 'david.l@example.com',
		location: 'Toronto, Canada',
		orders: 15,
		spent: 1845.75,
		lastOrder: '2023-08-14T16:50:00',
		status: 'Active',
		avatar:
			'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
	},
	{
		id: 5,
		name: 'Jennifer Smith',
		email: 'jennifer.s@example.com',
		location: 'Chicago, USA',
		orders: 2,
		spent: 129.99,
		lastOrder: '2023-08-14T14:25:00',
		status: 'Inactive',
		avatar:
			'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
	},
	{
		id: 6,
		name: 'Robert Johnson',
		email: 'robert.j@example.com',
		location: 'Berlin, Germany',
		orders: 9,
		spent: 945.25,
		lastOrder: '2023-08-13T11:15:00',
		status: 'Active',
		avatar:
			'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
	},
	{
		id: 7,
		name: 'Lisa Anderson',
		email: 'lisa.a@example.com',
		location: 'Paris, France',
		orders: 4,
		spent: 385.5,
		lastOrder: '2023-08-13T10:05:00',
		status: 'Active',
		avatar:
			'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
	},
	{
		id: 8,
		name: 'Thomas Wilson',
		email: 'thomas.w@example.com',
		location: 'Madrid, Spain',
		orders: 7,
		spent: 723.45,
		lastOrder: '2023-08-12T15:30:00',
		status: 'Inactive',
		avatar:
			'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
	}
];
