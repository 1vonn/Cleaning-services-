// Import HouseCleaningService and DishWashingService
import { HouseCleaningService } from 'yvonne\project\src\house-cleaning.service.ts';
import { DishWashingService } from 'yvonne\project\src\dish-washing.service.ts';

// Define dummy data for house cleaning services
const houseCleaningData = [
  { name: 'House Cleaning Service 1', location: 'Location 1', contactInfo: '1234567890', rate: 50 },
  { name: 'House Cleaning Service 2', location: 'Location 2', contactInfo: '0987654321', rate: 60 },
  // Add more dummy data as needed
];

// Define dummy data for dish washing services
const dishWashingData = [
  { name: 'Dish Washing Service 1', location: 'Location 3', contactInfo: '9876543210', rate: 40 },
  { name: 'Dish Washing Service 2', location: 'Location 4', contactInfo: '0123456789', rate: 45 },
  // Add more dummy data as needed
];

// Combine dummy data for both services if needed
const allServicesData = [...houseCleaningData, ...dishWashingData];

async function seedDatabase() {
  try {
    // Insert house cleaning data
    await HouseCleaningService.create(houseCleaningData);
  
    // Insert dish washing data
    await DishWashingService.create(dishWashingData);
  
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Ensure the process exits after seeding
    process.exit();
  }
}

seedDatabase();
