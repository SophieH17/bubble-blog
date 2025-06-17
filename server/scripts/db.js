let user =
    `create table if not exists users(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL,
    email VARCHAR(64) NOT NULL UNIQUE,
    password VARCHAR(64) NOT NULL,
    avatar_url VARCHAR(100) DEFAULT '',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
    );`

let category =
    `create table if not exists categories(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL UNIQUE,
    classification ENUM('article', 'image', 'shareable'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
    );`

let file =
    `create table if not exists files(
    id INT NOT NULL AUTO_INCREMENT,
    url VARCHAR(100) NOT NULL,
    filename VARCHAR(100) NOT NULL,
    format VARCHAR(10) NOT NULL,
    category_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
    );`

let post =
    `create table if not exists posts(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    category_id INT,
    classification ENUM('article', 'image', 'shareable'),
    tag VARCHAR(100),
    summary VARCHAR(1000),
    content TEXT,
    front_image VARCHAR(100), COMMENT 'URL of the front image',
    view_count INT DEFAULT 0,
    status ENUM('draft', 'published') DEFAULT 'draft'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
    );`

let like =
    `create table if not exists likes(
    id INT NOT NULL AUTO_INCREMENT,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    user_type ENUM('registered', 'guest') DEFAULT 'registered',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    PRIMARY KEY (id),
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );`

let comment =
    `create table if not exists comments(
    id INT NOT NULL AUTO_INCREMENT,
    post_id INT NOT NULL,
    user_id VARCHAR(32) NOT NULL COMMENT 'User ID or guest name',
    user_type ENUM('registered', 'guest') DEFAULT 'registered',
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    report_count INT DEFAULT 0,
    is_read BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id),
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );`

let tag =
    `create table if not exists tags(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
    );`

let diary = 
    `create table if not exists diaries(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    images VARCHAR(500), COMMENT 'URL of the front images',
    weather_id INT,
    mood INT DEFAULT 0 COMMENT '0: neutral, 1: happy, 2: sad, 3: angry, 4: excited, use INT for extensibility',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    primary key (id),
    FOREIGN KEY (weather_id) REFERENCES weathers(id) ON DELETE SET NULL
    );`

let weather =
    `create table if not exists weathers(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL UNIQUE,
    icon_url VARCHAR(100) NOT NULL COMMENT 'URL of the weather icon',
    PRIMARY KEY (id)
    );`
    
let message =
    `create table if not exists messages(
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL COMMENT 'User ID of the sender to the blog owner',
    user_type ENUM('registered', 'guest') DEFAULT 'registered',
    contact VARCHAR(100) NOT NULL COMMENT 'Email or phone number',
    content TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );`

let record =
    `create table if not exists records(
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    user_type ENUM('registered', 'guest') DEFAULT 'registered',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    from_location VARCHAR(100) NOT NULL COMMENT 'IP address or location',
    device ENUM('desktop', 'mobile', 'tablet') DEFAULT 'desktop'
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );`


    







