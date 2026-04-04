-- Création de la base de données
CREATE DATABASE IF NOT EXISTS cotechservices 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE cotechservices;

-- Table Admin
CREATE TABLE IF NOT EXISTS Admin (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table Product
CREATE TABLE IF NOT EXISTS Product (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  category VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  oldPrice INT,
  description TEXT NOT NULL,
  features TEXT NOT NULL,
  image VARCHAR(500) NOT NULL,
  brand VARCHAR(100) NOT NULL,
  rating INT DEFAULT 5,
  stock INT DEFAULT 0,
  inStock BOOLEAN DEFAULT TRUE,
  warranty VARCHAR(50) NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table Formation
CREATE TABLE IF NOT EXISTS Formation (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  duration VARCHAR(50) NOT NULL,
  price INT NOT NULL,
  mode VARCHAR(100) NOT NULL,
  level VARCHAR(50) NOT NULL,
  places INT NOT NULL,
  startDate VARCHAR(50) NOT NULL,
  schedule VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  fullDescription TEXT NOT NULL,
  program TEXT NOT NULL,
  prerequisites TEXT NOT NULL,
  certification VARCHAR(255) NOT NULL,
  image VARCHAR(500) NOT NULL,
  teacherName VARCHAR(255) NOT NULL,
  teacherBio TEXT NOT NULL,
  objectives TEXT NOT NULL,
  inStock BOOLEAN DEFAULT TRUE,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table ContactMessage
CREATE TABLE IF NOT EXISTS ContactMessage (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  isRead BOOLEAN DEFAULT FALSE,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Table Order
CREATE TABLE IF NOT EXISTS `Order` (
  id INT PRIMARY KEY AUTO_INCREMENT,
  orderNumber VARCHAR(50) UNIQUE NOT NULL,
  customerName VARCHAR(255) NOT NULL,
  customerEmail VARCHAR(255) NOT NULL,
  customerPhone VARCHAR(50),
  products TEXT NOT NULL,
  total INT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insertion admin par défaut (mot de passe: admin123)
-- Le hash est généré avec bcrypt, vous devrez le remplacer par votre propre hash
INSERT INTO Admin (email, password, name) VALUES (
  'admin@cotechservices.com',
  '$2a$10$N9qo8uLOickgx2ZMRZoMy.MrCqkKvZ7XqXqXqXqXqXqXqXqXqXq',
  'Administrateur'
);


-- Afficher la structure des tables
DESCRIBE Admin;
DESCRIBE Product;
DESCRIBE Formation;
DESCRIBE ContactMessage;
DESCRIBE `Order`;