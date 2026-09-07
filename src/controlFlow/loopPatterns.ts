interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    inStock: boolean;
}

const products: Product[] = [
    { id: 1, name: "Laptop", price: 1200, category: "Electronics", inStock: true },
    { id: 2, name: "Mouse", price: 25, category: "Electronics", inStock: true },
    { id: 3, name: "Desk", price: 300, category: "Furniture", inStock: false },
    { id: 4, name: "Chair", price: 150, category: "Furniture", inStock: true },
    { id: 5, name: "Monitor", price: 400, category: "Electronics", inStock: true }
];

// 1. FOR LOOP - Classic iteration
console.log("\n=== FOR LOOP ===");
for (let i = 0; i < products.length; i++) {
    console.log(`${i}: ${products[i]?.name} - ${products[i]?.price}`)
}

// 2. WHILE LOOP - Condition-based
console.log("\n=== WHILE LOOP ===");
let index = 0;
while (index < 3) {
    console.log(products[index]?.name);
    index++;
}

// 3. DO-WHILE LOOP - Executes at least once
console.log("\n=== DO-WHILE LOOP ===");
let count = 0;
do {
    console.log(`Attempt ${count + 1}`);
    count++;
} while (count < 3);

// ========== ARRAY ITERATION ==========

// 4. FOR-OF LOOP - Iterate over values
console.log("\n=== FOR-OF LOOP ===");
for (const product of products) {
    if (product.inStock) {
        console.log(`${product.name} is available`);
    }
}

// 5. FOR-IN LOOP - Iterate over keys (not recommended for arrays)
console.log("\n=== FOR-IN LOOP (Object) ===");
const user = { name: "John", age: 30, email: "john@test.com" };
for (const key in user) {
    console.log(`${key}: ${user[key as keyof typeof user]}`);
}

// 6. FOREACH - Side effects
console.log("\n=== FOREACH ===");
products.forEach((product, index) => {
    console.log(`[${index}] ${product.name}: $${product.price}`);
});

