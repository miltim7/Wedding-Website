<?php
session_start();

ini_set('display_errors', 0); 
error_reporting(E_ALL);
  
# require_once(__DIR__.'/cgi-bin/ini/ini.php');
# require_once(__DIR__.'/cgi-bin/functions.php');

global $config, $page; 

$auth = false;

if (isset($_SESSION) && $_SESSION["uid"] && $_SESSION["login"]) {
    $auth = check_auth($_SESSION["login"], $_SESSION["uid"]);
}

$title = "AgafonovWedd - Ведущий Москва";

if ($page === "login") {
    $title = "AgafonovWedd - Ведущий Москва | Авторизация";
}
elseif ($page === "delivery") {
    $title = "AgafonovWedd - Ведущий Москва | Информация о доставке";
} 
elseif ($page === "forgot-password") {
    $title = "AgafonovWedd - Ведущий Москва | Восстановление пароля";
}
elseif ($page === "payments") {
    $title = "AgafonovWedd - Ведущий Москва | Информация об оплате";
}
elseif ($page === "privacy-policy") {
    $title = "AgafonovWedd - Ведущий Москва | Политика конфиденциальности";
}
elseif ($page === "signup") {
    $title = "AgafonovWedd - Ведущий Москва | Регистрация";
}
elseif ($page === "user-agreement") {
    $title = "AgafonovWedd - Ведущий Москва | Пользовательское соглашение";
}
elseif ($page === "dashboard") {
    $title = "AgafonovWedd - Ведущий Москва | Личный кабинет";
}


$sid = session_id();

$salt = $_SESSION["uid"];

# $user = user_info($salt);

?>

<!DOCTYPE html>
<html lang="zxx">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<link rel="icon" href="logo/logo.png" type="image/gif" sizes="16x16">
		<title><?php echo $title; ?></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="Ведущий мероприятий и организатор красивых свадебных событий, ярких корпоративных мероприятий, стильных enent-проектов, и уютных юбилеев.">
		<meta name="keywords" content="">
		<meta name="author" content="Сергей Агафонов">
		<!-- CSS Files
		================================================== -->
		<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap">
		<link href="css/bootstrap-grid.min.css" rel="stylesheet" type="text/css" id="bootstrap-grid">
		<link href="css/bootstrap-reboot.min.css" rel="stylesheet" type="text/css" id="bootstrap-reboot">
		<link href="css/plugins.css" rel="stylesheet" type="text/css">
		<link href="css/style.css?v=1.40" rel="stylesheet" type="text/css">
		<link href="css/rev-settings.css?v=1.1" rel="stylesheet" type="text/css">
		<link href="css/color.css?v=1.7" rel="stylesheet" type="text/css">
		<!-- color scheme -->
		<link rel="stylesheet" href="css/magenta.css" type="text/css" id="colors">
		<!-- custom font -->
		<link rel="stylesheet" href="css/font-style.css?v=1.1" type="text/css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
	</head>
	<body id="homepage" style="display: block;">
		<div id="wrapper" style="background-size: cover;">
			<!-- header begin -->
			<header class="transparent fix-header">
				<div class="info" style="background-size: cover;">
					<div class="container" style="background-size: cover;">
						<div class="row" style="background-size: cover;">
							<div class="col-md-12 fix-header-grid" style="background-size: cover;">
								<div class="fix-header-sets">
									<!-- <div class="column" style="background-size: cover;">Работаем <span class="id-color"><strong>24/7</strong></span></div> -->
									<div class="column fix-phone-hunter-container" style="background-size: cover;">Звоните <a href="tel:89690856969"><span class="id-color"><strong class="fix-phone-hunter">8 969 085 69 69</strong></span></a></div>
								</div>
								<!-- social icons -->
								<div class="column social fix-header-icons" style="background-size: cover;">
									<a href="https://vk.com/agafonovshow" target="_blank"><i class="fa fa-vk"></i></a>
									<a href="https://t.me/agafonovcanal" target="_blank"><i class="fa fa-telegram"></i></a>
									<!-- <a href="https://www.youtube.com/@user-dz9ho2ot6t" target="_blank"><i class="fa fa-youtube-play"></i></a> -->
									<a href="https://wa.me/79690856969?text=%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9%2C%20%D0%B7%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%20%0A%D0%A5%D0%BE%D1%82%D0%B8%D0%BC%2C%20%D1%87%D1%82%D0%BE%D0%B1%D1%8B%20%D0%B2%D1%8B%20%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D0%BB%D0%B8%20%D0%BD%D0%B0%D1%88%20%D0%B2%D0%B5%D1%87%D0%B5%D1%80%21%20" target="_blank"><i class="fa fa-whatsapp" target="_blank"></i></a>
									<a href="mailto:info@agafonovwedd.ru" target="_blank"><i class="fa fa-envelope-o"></i></a>
								</div>
								<!-- social icons close -->
							</div>
						</div>
					</div>
				</div>
				<div class="container pd-0-mb" style="background-size: cover;">
					<div class="row" style="background-size: cover;">
						<div class="col-md-12 fix-hd-md" style="background-size: cover;">
							<!-- logo begin -->
							<div id="logo" style="background-size: cover; width: 250px;">
								<a href="index.php">
									<img src="logo/logo.svg" class="logo" alt="">
								</a>
							</div>
							<!-- logo close -->
                            <!-- small button begin -->
                            <span id="menu-btn" class="unclick"></span>
                            <!-- small button close -->
                            <div class="header-extra" style="background-size: cover;">
                                <div class="v-center" style="background-size: cover;">
                                    <span id="b-menu">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </div>
                            </div>
                            <!-- mainmenu begin -->
							<ul id="mainmenu" class="ms-2 dotted-separator">
								<li><a href="index.php#section-about">Обо мне<span></span></a></li>
								<li><a href="index.php#section">Фотографии<span></span></a></li>
								<li><a href="index.php#section-services">Пакеты услуг<span></span></a></li>
								<li><a href="index.php#section-services">Материалы<span></span></a></li>
								<li><a href="index.php#section-prices">Цены<span></span></a></li>
								<li><a href="index.php#section-testimonials">Отзывы<span></span></a></li>
								<li><a href="https://agafonovwedd.ru/index.php#section-contacts">Контакты<span></span></a></li>
								<?php
								if (!$auth) {
								?>
								<!-- <li><a href="login.php">Войти<span></span></a></li> -->
								<?php
								}
								else {
								?>
								<!-- <li><a href="dashboard.php">Мой аккаунт<span></span></a></li> -->
								<?php
								}
								?>
							</ul>
							<!-- mainmenu close -->
						</div>
					</div>
				</div>
			</header>
			<!-- header close -->
            <!-- content begin -->
            <div id="content" class="no-bottom no-top" style="background-size: cover;">	
