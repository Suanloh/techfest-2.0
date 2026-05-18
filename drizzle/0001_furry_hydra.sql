CREATE TABLE `trips` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`destination` varchar(255) NOT NULL,
	`duration` int NOT NULL,
	`budget` int NOT NULL,
	`itinerary` text NOT NULL,
	`budgetBreakdown` text NOT NULL,
	`weatherOverview` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `trips_id` PRIMARY KEY(`id`)
);
