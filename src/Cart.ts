export interface CartItem {
    productId: number;
    quantity: number;
    price: number;
    productName: string;  // Example fields; adjust according to your actual CartItem structure
  }
  
  export interface Command {
    commandId: number;
    // Add other fields that are part of the Command entity
  }
  
  export interface Cart {
    cartId?: number;
    dateLastItem: Date;  // Store the last item date in the correct format
    cartAmount: number;
    numberOfItems: number;
    products: any[];  // List of products related to the cart
    command: Command;  // Associated command object
    items: CartItem[];  // List of cart items
  }
  