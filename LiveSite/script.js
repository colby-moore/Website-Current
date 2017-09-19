	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/colby.html',
				controller  : 'mainController'
			})

			// route for the home page
			.when('/whoami', {
				templateUrl : 'pages/whoami.html',
				controller  : 'whoamiController'
			})

			// route for the skills page
			.when('/skills', {
				templateUrl : 'pages/skills.html',
				controller  : 'skillsController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});

	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view

		$scope.colbyFooter = 'Please have a look around and explore the rest of my site! Last updated 09/11/17.'

	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('whoamiController', function($scope) {
		// create a message to display in our view
		$scope.school = 'Attended Endicott College freshman year and then transfered to Marist College. Graduated from Marist College as of August 2017 with a B.S. concentrating in software development.';
		$scope.minors = 'Along with the 4 year B.S. in computer science I am also minoring in Cybersecurity, Information Systems, and Information Technology.';
		$scope.frontEnd = 'I strive at creating simple, yet polished designs through using many different variations of design principles. There is no better way to learn than experience, and through trial and error I aim to broaden my knowledge each day.';
		$scope.intern = 'I have held two previous summer internships working in Enterprise Technology Departments for two healthcare providers. With the combination of my professional and academic careers, I have a very broad range of knowledge to offer.'
		$scope.whoamiFooter = 'Graduated August 2017. I strive to further the extent of my knowledge everyday through the challenges I am given.'

	});

	scotchApp.controller('skillsController', function($scope) {
		$scope.languages = 'JavaScript, Swift, AngularJS, C++, HTML5, CSS, PHP, MySQL, SQL, Haskell';
		$scope.frameworks = 'Bootstrap, Skeleton';
		$scope.mainframe = 'IBM Z Systems, z/OS, z/TPF, JCL, COBOL, JSON, MongoDB';
		$scope.technical = 'Xcode, Software development life cycle, Network infrastructure, Wireshark, Nmap, OpenVAS, Github, Oracle, Access, Hexadecimal, Binary, Hexadecimal-Binary conversions, Ceaser Cyphers, Word, Excel, PowerPoint, Photoshop';
		$scope.skillsFooter = 'At the moment I am in the process of building a compiler, which takes up much of my free time on top of applying to jobs.'

	});

	scotchApp.controller('contactController', function($scope) {
		$scope.github = 'Github.';
		$scope.facebook = 'My Facebook is here.';
		$scope.spotify = 'Check out music I like on Spotify.';
		$scope.email = 'Email me at colbydashmoore@gmail.com!';
		$scope.marist = "Marist College's wesbite.";
		$scope.programs = "See the computer science program at Marist here.";
		$scope.cybersecurity = 'Cybersecurity Minor.';
		$scope.itMinor = 'Information Technology Minor.';
		$scope.isMinor = 'Information Systems Minor.';
		$scope.contactFooter = "I'm not a very big poster on any sort of social media but feel free to check me out on any of the following.";

	});
