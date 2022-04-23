-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 26, 2021 lúc 05:10 PM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `doan`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add category', 7, 'add_category'),
(26, 'Can change category', 7, 'change_category'),
(27, 'Can delete category', 7, 'delete_category'),
(28, 'Can view category', 7, 'view_category'),
(29, 'Can add order', 8, 'add_order'),
(30, 'Can change order', 8, 'change_order'),
(31, 'Can delete order', 8, 'delete_order'),
(32, 'Can view order', 8, 'view_order'),
(33, 'Can add staff', 9, 'add_staff'),
(34, 'Can change staff', 9, 'change_staff'),
(35, 'Can delete staff', 9, 'delete_staff'),
(36, 'Can view staff', 9, 'view_staff'),
(37, 'Can add table', 10, 'add_table'),
(38, 'Can change table', 10, 'change_table'),
(39, 'Can delete table', 10, 'delete_table'),
(40, 'Can view table', 10, 'view_table'),
(41, 'Can add reservation', 11, 'add_reservation'),
(42, 'Can change reservation', 11, 'change_reservation'),
(43, 'Can delete reservation', 11, 'delete_reservation'),
(44, 'Can view reservation', 11, 'view_reservation'),
(45, 'Can add foods', 12, 'add_foods'),
(46, 'Can change foods', 12, 'change_foods'),
(47, 'Can delete foods', 12, 'delete_foods'),
(48, 'Can view foods', 12, 'view_foods'),
(49, 'Can add food_ order', 13, 'add_food_order'),
(50, 'Can change food_ order', 13, 'change_food_order'),
(51, 'Can delete food_ order', 13, 'delete_food_order'),
(52, 'Can view food_ order', 13, 'view_food_order');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$260000$rItzIrb359CU2wFicxBKQz$ZXRZL0+HAydbvmt7hu8+I0smjrDCsNE6YQpnX7s8xBY=', '2021-11-18 14:38:29.929380', 1, 'admin', '', '', 'admin@admin.com', 1, 1, '2021-11-18 14:36:38.674484');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2021-11-18 14:41:43.776855', '1', 'Order object (1)', 1, '[{\"added\": {}}]', 8, 1),
(2, '2021-11-18 15:18:10.802446', '1', 'Category object (1)', 1, '[{\"added\": {}}]', 7, 1),
(3, '2021-11-18 15:18:18.681612', '1', 'Foods object (1)', 1, '[{\"added\": {}}]', 12, 1),
(4, '2021-11-18 15:18:53.959420', '1', 'Foods object (1)', 3, '', 12, 1),
(5, '2021-11-18 15:19:14.591103', '2', 'Category object (2)', 1, '[{\"added\": {}}]', 7, 1),
(6, '2021-11-18 15:21:12.131419', '1', 'Category object (1)', 2, '[{\"changed\": {\"fields\": [\"Name\"]}}]', 7, 1),
(7, '2021-11-18 15:30:06.324003', '2', 'Foods object (2)', 1, '[{\"added\": {}}]', 12, 1),
(8, '2021-11-18 15:31:12.693097', '3', 'Foods object (3)', 1, '[{\"added\": {}}]', 12, 1),
(9, '2021-11-18 15:31:44.208657', '4', 'Foods object (4)', 1, '[{\"added\": {}}]', 12, 1),
(10, '2021-11-18 15:32:13.667037', '5', 'Foods object (5)', 1, '[{\"added\": {}}]', 12, 1),
(11, '2021-11-18 15:32:57.585115', '6', 'Foods object (6)', 1, '[{\"added\": {}}]', 12, 1),
(12, '2021-11-18 15:33:38.261153', '7', 'Foods object (7)', 1, '[{\"added\": {}}]', 12, 1),
(13, '2021-11-18 15:34:08.072981', '8', 'Foods object (8)', 1, '[{\"added\": {}}]', 12, 1),
(14, '2021-11-18 15:34:40.226867', '9', 'Foods object (9)', 1, '[{\"added\": {}}]', 12, 1),
(15, '2021-11-18 15:35:20.810740', '10', 'Foods object (10)', 1, '[{\"added\": {}}]', 12, 1),
(16, '2021-11-18 15:35:49.252383', '11', 'Foods object (11)', 1, '[{\"added\": {}}]', 12, 1),
(17, '2021-11-18 15:36:18.444017', '12', 'Foods object (12)', 1, '[{\"added\": {}}]', 12, 1),
(18, '2021-11-18 15:36:46.771319', '13', 'Foods object (13)', 1, '[{\"added\": {}}]', 12, 1),
(19, '2021-11-18 15:37:23.270339', '14', 'Foods object (14)', 1, '[{\"added\": {}}]', 12, 1),
(20, '2021-11-18 15:37:55.321558', '15', 'Foods object (15)', 1, '[{\"added\": {}}]', 12, 1),
(21, '2021-11-18 15:39:08.040864', '16', 'Foods object (16)', 1, '[{\"added\": {}}]', 12, 1),
(22, '2021-11-18 15:39:39.382857', '17', 'Foods object (17)', 1, '[{\"added\": {}}]', 12, 1),
(23, '2021-11-18 15:40:12.211017', '18', 'Foods object (18)', 1, '[{\"added\": {}}]', 12, 1),
(24, '2021-11-18 15:40:47.400867', '19', 'Foods object (19)', 1, '[{\"added\": {}}]', 12, 1),
(25, '2021-11-18 15:41:26.131102', '20', 'Foods object (20)', 1, '[{\"added\": {}}]', 12, 1),
(26, '2021-11-18 15:41:57.193587', '21', 'Foods object (21)', 1, '[{\"added\": {}}]', 12, 1),
(27, '2021-11-18 15:42:25.961595', '22', 'Foods object (22)', 1, '[{\"added\": {}}]', 12, 1),
(28, '2021-11-18 15:45:45.840351', '23', 'Foods object (23)', 1, '[{\"added\": {}}]', 12, 1),
(29, '2021-11-18 15:46:38.018219', '24', 'Foods object (24)', 1, '[{\"added\": {}}]', 12, 1),
(30, '2021-11-18 15:47:26.088684', '25', 'Foods object (25)', 1, '[{\"added\": {}}]', 12, 1),
(31, '2021-11-18 15:48:33.728739', '26', 'Foods object (26)', 1, '[{\"added\": {}}]', 12, 1),
(32, '2021-11-18 15:49:07.120025', '27', 'Foods object (27)', 1, '[{\"added\": {}}]', 12, 1),
(33, '2021-11-18 15:49:49.832960', '28', 'Foods object (28)', 1, '[{\"added\": {}}]', 12, 1),
(34, '2021-11-18 15:50:20.911739', '29', 'Foods object (29)', 1, '[{\"added\": {}}]', 12, 1),
(35, '2021-11-18 15:50:52.381305', '30', 'Foods object (30)', 1, '[{\"added\": {}}]', 12, 1),
(36, '2021-11-18 15:51:44.872867', '31', 'Foods object (31)', 1, '[{\"added\": {}}]', 12, 1),
(37, '2021-11-18 15:53:27.673284', '32', 'Foods object (32)', 1, '[{\"added\": {}}]', 12, 1),
(38, '2021-11-18 15:54:00.377631', '33', 'Foods object (33)', 1, '[{\"added\": {}}]', 12, 1),
(39, '2021-11-18 16:02:25.368110', '2', 'Order object (2)', 1, '[{\"added\": {}}]', 8, 1),
(40, '2021-11-18 16:02:40.246472', '1', 'Order object (1)', 3, '', 8, 1),
(41, '2021-11-18 16:03:27.528158', '3', 'Order object (3)', 1, '[{\"added\": {}}]', 8, 1),
(42, '2021-11-18 16:04:57.328010', '4', 'Order object (4)', 1, '[{\"added\": {}}]', 8, 1),
(43, '2021-11-18 16:05:38.857362', '5', 'Order object (5)', 1, '[{\"added\": {}}]', 8, 1),
(44, '2021-11-18 16:06:47.839393', '6', 'Order object (6)', 1, '[{\"added\": {}}]', 8, 1),
(45, '2021-11-18 16:08:06.281360', '7', 'Order object (7)', 1, '[{\"added\": {}}]', 8, 1),
(46, '2021-11-18 16:09:11.291532', '8', 'Order object (8)', 1, '[{\"added\": {}}]', 8, 1),
(47, '2021-11-18 16:10:03.737274', '9', 'Order object (9)', 1, '[{\"added\": {}}]', 8, 1),
(48, '2021-11-18 16:11:17.008411', '10', 'Order object (10)', 1, '[{\"added\": {}}]', 8, 1),
(49, '2021-11-18 16:11:58.760432', '11', 'Order object (11)', 1, '[{\"added\": {}}]', 8, 1),
(50, '2021-11-18 16:23:15.027326', '1', 'Food_Order object (1)', 1, '[{\"added\": {}}]', 13, 1),
(51, '2021-11-18 16:23:28.543513', '2', 'Food_Order object (2)', 1, '[{\"added\": {}}]', 13, 1),
(52, '2021-11-18 16:23:41.182500', '3', 'Food_Order object (3)', 1, '[{\"added\": {}}]', 13, 1),
(53, '2021-11-18 16:23:51.582540', '4', 'Food_Order object (4)', 1, '[{\"added\": {}}]', 13, 1),
(54, '2021-11-18 16:24:01.731063', '5', 'Food_Order object (5)', 1, '[{\"added\": {}}]', 13, 1),
(55, '2021-11-18 16:24:13.862198', '6', 'Food_Order object (6)', 1, '[{\"added\": {}}]', 13, 1),
(56, '2021-11-18 16:24:26.384107', '7', 'Food_Order object (7)', 1, '[{\"added\": {}}]', 13, 1),
(57, '2021-11-18 16:24:42.724200', '8', 'Food_Order object (8)', 1, '[{\"added\": {}}]', 13, 1),
(58, '2021-11-18 16:24:52.000965', '9', 'Food_Order object (9)', 1, '[{\"added\": {}}]', 13, 1),
(59, '2021-11-18 16:25:01.708537', '10', 'Food_Order object (10)', 1, '[{\"added\": {}}]', 13, 1),
(60, '2021-11-18 16:25:14.150057', '11', 'Food_Order object (11)', 1, '[{\"added\": {}}]', 13, 1),
(61, '2021-11-18 16:25:21.830293', '12', 'Food_Order object (12)', 1, '[{\"added\": {}}]', 13, 1),
(62, '2021-11-18 16:25:34.198896', '13', 'Food_Order object (13)', 1, '[{\"added\": {}}]', 13, 1),
(63, '2021-11-18 16:25:46.905171', '14', 'Food_Order object (14)', 1, '[{\"added\": {}}]', 13, 1),
(64, '2021-11-18 16:26:06.308580', '15', 'Food_Order object (15)', 1, '[{\"added\": {}}]', 13, 1),
(65, '2021-11-18 16:26:15.795097', '16', 'Food_Order object (16)', 1, '[{\"added\": {}}]', 13, 1),
(66, '2021-11-18 16:26:26.767020', '17', 'Food_Order object (17)', 1, '[{\"added\": {}}]', 13, 1),
(67, '2021-11-18 16:26:47.170951', '18', 'Food_Order object (18)', 1, '[{\"added\": {}}]', 13, 1),
(68, '2021-11-18 16:26:56.991571', '19', 'Food_Order object (19)', 1, '[{\"added\": {}}]', 13, 1),
(69, '2021-11-18 16:27:06.526552', '20', 'Food_Order object (20)', 1, '[{\"added\": {}}]', 13, 1),
(70, '2021-11-18 16:27:19.933591', '21', 'Food_Order object (21)', 1, '[{\"added\": {}}]', 13, 1),
(71, '2021-11-18 16:27:27.443978', '22', 'Food_Order object (22)', 1, '[{\"added\": {}}]', 13, 1),
(72, '2021-11-18 16:27:34.910534', '23', 'Food_Order object (23)', 1, '[{\"added\": {}}]', 13, 1),
(73, '2021-11-18 16:27:44.650796', '24', 'Food_Order object (24)', 1, '[{\"added\": {}}]', 13, 1),
(74, '2021-11-18 16:27:53.140377', '25', 'Food_Order object (25)', 1, '[{\"added\": {}}]', 13, 1),
(75, '2021-11-18 16:28:03.466876', '26', 'Food_Order object (26)', 1, '[{\"added\": {}}]', 13, 1),
(76, '2021-11-18 16:28:16.390586', '27', 'Food_Order object (27)', 1, '[{\"added\": {}}]', 13, 1),
(77, '2021-11-18 16:28:27.139678', '28', 'Food_Order object (28)', 1, '[{\"added\": {}}]', 13, 1),
(78, '2021-11-18 16:28:35.931463', '29', 'Food_Order object (29)', 1, '[{\"added\": {}}]', 13, 1),
(79, '2021-11-18 16:28:45.733400', '30', 'Food_Order object (30)', 1, '[{\"added\": {}}]', 13, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(5, 'contenttypes', 'contenttype'),
(6, 'sessions', 'session'),
(7, 'todo', 'category'),
(12, 'todo', 'foods'),
(13, 'todo', 'food_order'),
(8, 'todo', 'order'),
(11, 'todo', 'reservation'),
(9, 'todo', 'staff'),
(10, 'todo', 'table');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2021-11-18 14:30:45.216597'),
(2, 'auth', '0001_initial', '2021-11-18 14:30:45.631687'),
(3, 'admin', '0001_initial', '2021-11-18 14:30:45.755716'),
(4, 'admin', '0002_logentry_remove_auto_add', '2021-11-18 14:30:45.770718'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2021-11-18 14:30:45.779721'),
(6, 'contenttypes', '0002_remove_content_type_name', '2021-11-18 14:30:45.830730'),
(7, 'auth', '0002_alter_permission_name_max_length', '2021-11-18 14:30:45.869738'),
(8, 'auth', '0003_alter_user_email_max_length', '2021-11-18 14:30:45.892747'),
(9, 'auth', '0004_alter_user_username_opts', '2021-11-18 14:30:45.900746'),
(10, 'auth', '0005_alter_user_last_login_null', '2021-11-18 14:30:45.940756'),
(11, 'auth', '0006_require_contenttypes_0002', '2021-11-18 14:30:45.945759'),
(12, 'auth', '0007_alter_validators_add_error_messages', '2021-11-18 14:30:45.953759'),
(13, 'auth', '0008_alter_user_username_max_length', '2021-11-18 14:30:45.973763'),
(14, 'auth', '0009_alter_user_last_name_max_length', '2021-11-18 14:30:45.993766'),
(15, 'auth', '0010_alter_group_name_max_length', '2021-11-18 14:30:46.016773'),
(16, 'auth', '0011_update_proxy_permissions', '2021-11-18 14:30:46.025777'),
(17, 'auth', '0012_alter_user_first_name_max_length', '2021-11-18 14:30:46.050781'),
(18, 'sessions', '0001_initial', '2021-11-18 14:30:46.088790'),
(19, 'todo', '0001_initial', '2021-11-18 14:30:46.404860');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('fhifdmlnfmwzdyl11wocatpjbz2clctf', '.eJxVjEEOwiAQRe_C2hBgpDAu3fcMZAaoVA0kpV0Z765NutDtf-_9lwi0rSVsPS9hTuIitDj9bkzxkesO0p3qrcnY6rrMLHdFHrTLsaX8vB7u30GhXr71YMGDUgomAEbjSaNx2SjWDNE7nLT1Fo1SDofkPVnGZKI5O3YUbQTx_gCeFDaF:1mniYX:kx88XqlFXQBYMoXhT_bwkj6FOrHUQLtV5FOEsj3O-J0', '2021-12-02 14:38:29.932381');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `todo_category`
--

CREATE TABLE `todo_category` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `todo_category`
--

INSERT INTO `todo_category` (`id`, `name`) VALUES
(1, 'food'),
(2, 'drink');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `todo_foods`
--

CREATE TABLE `todo_foods` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `info` longtext DEFAULT NULL,
  `qty_day` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  `price` bigint(20) NOT NULL,
  `cost` bigint(20) NOT NULL,
  `category_id_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `todo_foods`
--

INSERT INTO `todo_foods` (`id`, `name`, `info`, `qty_day`, `image`, `price`, `cost`, `category_id_id`) VALUES
(2, 'Bánh tráng cuộn', 'Đây là thông tin món bánh tráng cuộn', 10, 'banh_trang_cuon.png', 20000, 15000, 1),
(3, 'Bánh tráng nướng', 'info bánh tráng nướng', 10, 'banh_trang_nuong.png', 25000, 22000, 1),
(4, 'Bánh tráng trộn', 'info bánh tráng trộn', 10, 'banh_trang_tron.png', 30000, 25000, 1),
(5, 'Bắp xào', 'info bắp xào', 12, 'bap_xao.png', 15000, 13000, 1),
(6, 'Chân gà xả tắc', 'info chân gà xả tắc', 30, 'chan_ga_xa_tac.png', 25000, 21000, 1),
(7, 'Chuối chiên', 'info chuối chiên', 50, 'chuoi_chien.png', 10000, 7000, 1),
(8, 'Gỏi cuốn', 'info gỏi cuốn', 40, 'goi_cuon.png', 15000, 11000, 1),
(9, 'Hột vịt lộn', 'info hột vịt lộn', 100, 'hot_vit_lon.png', 10000, 8000, 1),
(10, 'Bánh bèo', 'info bánh bèo', 50, 'banh_beo.png', 20000, 14000, 1),
(11, 'Bánh canh cua', 'info bánh canh cua', 35, 'banh_canh_cua.png', 20000, 18000, 1),
(12, 'Bánh cuốn', 'info bánh cuốn', 45, 'banh_cuon.png', 25000, 20000, 1),
(13, 'Bánh đa', 'info bánh đa', 30, 'banh_da.png', 10000, 7000, 1),
(14, 'Bánh đúc', 'info bánh đúc', 50, 'banh_duc.png', 15000, 12000, 1),
(15, 'Bánh hỏi', 'info bánh hỏi', 20, 'banh_hoi.png', 20000, 18000, 1),
(16, 'Bánh tằm', 'info bánh tằm', 30, 'banh_tam.png', 20000, 15000, 1),
(17, 'Bánh xèo', 'info bánh xèo', 25, 'banh_xeo.png', 15000, 11000, 1),
(18, 'Bún bò', 'info bún bò', 50, 'bun_bo.png', 40000, 30000, 1),
(19, 'Bún chả Hà Nội', 'info bún chả Hà Nội', 35, 'bun_cha_ha_noi.png', 50000, 45000, 1),
(20, 'Bún đậu mắm tôm', 'info bún đậu mắm tôm', 45, 'bun_dau_mam_tom.png', 35000, 31000, 1),
(21, 'Bún mắm', 'info bún mắm', 20, 'bun_mam.png', 30000, 23000, 1),
(22, 'Bún mộc', 'info bún mộc', 15, 'bun_moc.png', 20000, 16000, 1),
(23, 'Bún ốc', 'info bún ốc', 30, 'bun_oc.png', 30000, 24000, 1),
(24, 'Bún riêu', 'info bún riêu', 35, 'bun_rieu.png', 25000, 22000, 1),
(25, 'Bún thịt nướng', 'info bún thịt nướng', 23, 'bun_thit_nuong.png', 30000, 25000, 1),
(26, 'Chè thái', 'info chè thái', 30, 'che_thai.png', 15000, 11000, 2),
(27, 'Dừa dằm', 'info dừa dằm', 20000, 'dua_dam.png', 20000, 14000, 2),
(28, 'Milo dằm', 'info milo dằm', 60, 'milo_dam.png', 20000, 14000, 2),
(29, 'Nước ép cam', 'info nước ép cam', 40, 'nuoc_ep_cam.png', 15000, 10000, 2),
(30, 'Sữa chua nếp cẩm', 'info sữa chua nếp cẩm', 30, 'sua_chua_nep_cam.png', 25000, 20000, 2),
(31, 'Sữa tươi trân châu', 'info sữa tươi chân châu', 30, 'sua_tuoi_tran_chau_duong_den.png', 30000, 20000, 2),
(32, 'Trà đào', 'info trà đào', 30, 'tra_dao.png', 15000, 10000, 2),
(33, 'Trà sữa trân châu', 'info trà sữa trân châu', 50, 'tra_sua_tran_chau.png', 25000, 19000, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `todo_food_order`
--

CREATE TABLE `todo_food_order` (
  `id` bigint(20) NOT NULL,
  `quantity` int(11) NOT NULL,
  `food_id_id` int(11) NOT NULL,
  `order_id_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `todo_food_order`
--

INSERT INTO `todo_food_order` (`id`, `quantity`, `food_id_id`, `order_id_id`) VALUES
(1, 2, 6, 2),
(2, 1, 25, 2),
(3, 1, 28, 2),
(4, 4, 19, 3),
(5, 5, 4, 3),
(6, 4, 12, 3),
(7, 2, 33, 3),
(8, 2, 15, 4),
(9, 3, 16, 4),
(10, 3, 18, 4),
(11, 2, 20, 4),
(12, 1, 9, 4),
(13, 1, 4, 5),
(14, 1, 27, 5),
(15, 6, 24, 6),
(16, 4, 12, 6),
(17, 4, 30, 6),
(18, 5, 10, 7),
(19, 5, 20, 7),
(20, 1, 30, 7),
(21, 1, 25, 8),
(22, 4, 19, 9),
(23, 4, 12, 9),
(24, 4, 33, 9),
(25, 5, 4, 10),
(26, 5, 27, 10),
(27, 10, 5, 11),
(28, 10, 13, 11),
(29, 10, 7, 11),
(30, 10, 26, 11);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `todo_order`
--

CREATE TABLE `todo_order` (
  `id` int(11) NOT NULL,
  `c_name` varchar(30) NOT NULL,
  `c_tele` varchar(10) NOT NULL,
  `c_email` varchar(254) NOT NULL,
  `formality` varchar(1) NOT NULL,
  `c_address` varchar(200) DEFAULT NULL,
  `total` bigint(20) NOT NULL,
  `time` datetime(6) NOT NULL,
  `status` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `todo_order`
--

INSERT INTO `todo_order` (`id`, `c_name`, `c_tele`, `c_email`, `formality`, `c_address`, `total`, `time`, `status`) VALUES
(2, 'Bạch Phương Lan', '0913115688', 'dieudan101@yahoo.com', 'E', 'D15/12C Võ Văn Vân, ấp 4, xã Vĩnh Lộc B, Bình Chánh, TPHCM', 100000, '2021-11-18 16:02:25.366109', 'F'),
(3, 'Bùi Anh Dũng', '0988386777', 'dungtoandung@gmail.com', 'T', '12AB Khách sạn Dầu khí Thanh Đa, P27, Q Bình Thạnh TP HCM', 500000, '2021-11-18 16:03:27.527157', 'F'),
(4, 'Bùi Hữu Chương', '0983425681', 'chuong.bh@gmail.com', 'T', 'Công ty Công nghệ Tin học ISA - Chi nhánh TPHCM', 300000, '2021-11-18 16:04:57.326577', 'D'),
(5, 'Bùi Mai Hữu Hà', '0903945455', 'inkducquan@yahoo.com', 'T', 'Cty CP SX-TM-DV Đức Quân', 50000, '2021-11-18 16:05:38.856362', 'C'),
(6, 'Bùi Quang Tùng', '0909155218', 'tung.buiquang@bpro.com.vn', 'T', '13/13 LẠC LONG QUÂN, P 9 , Q TÂN BÌNH', 350000, '2021-11-18 16:06:47.837380', 'D'),
(7, 'Cổ Thị Minh Hảo', '0908391542', 'co-thi-minh.hao@vietnamstar-auto.com', 'T', '2 Trường Chinh, P. Tây Thạnh, Q. Tân Phú', 300000, '2021-11-18 16:08:06.279359', 'F'),
(8, 'Đặng Văn Nhiên', '0988200377', 'nhiendv@viettel.com.vn', 'E', 'H158/2A Hoàng Hoa Thám-P12-Q.Tân Bình-HCM', 30000, '2021-11-18 16:09:11.289531', 'F'),
(9, 'Dương Minh Hùng', '0903043146', 'hungdm63@yahoo.com.vn', 'T', '2A Nguyễn Thị Minh Khai - P.Đa Kao - Quận 1 - Tp.HCM', 400000, '2021-11-18 16:10:03.735270', 'F'),
(10, 'Lê Duy Bình', '0903747911', 'bamboojnj@gmail.com', 'T', '181 Điện Biên Phủ, Q1, TPHCM', 250000, '2021-11-18 16:11:17.007409', 'F'),
(11, 'Trần Khánh Tân', '0938991660', 'trankhanhtan@gmail.com', 'T', '491/51 Nguyễn Đình Chiểu, p2, q3, tpHCM', 500000, '2021-11-18 16:11:58.759432', 'F');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `todo_reservation`
--

CREATE TABLE `todo_reservation` (
  `id` bigint(20) NOT NULL,
  `rtime` datetime(6) NOT NULL,
  `no_customer` int(11) NOT NULL,
  `interval` int(11) NOT NULL,
  `staff_name_id` int(11) DEFAULT NULL,
  `table_id_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `todo_reservation`
--

INSERT INTO `todo_reservation` (`id`, `rtime`, `no_customer`, `interval`, `staff_name_id`, `table_id_id`, `name`) VALUES
(12, '2022-12-12 12:12:00.000000', 3, 3, NULL, 1, 'qweqwe'),
(13, '2022-12-12 12:12:00.000000', 3, 3, NULL, 1, 'qweqwe'),
(14, '2022-12-12 12:12:00.000000', 3, 3, NULL, 1, 'qweqwe'),
(15, '2022-12-12 12:12:00.000000', 3, 3, NULL, 1, 'qweqwe'),
(16, '2022-12-12 12:12:00.000000', 3, 3, NULL, 1, 'qweqwe'),
(17, '2022-12-12 12:12:00.000000', 3, 2, NULL, 3, 'asdsad'),
(18, '2022-12-12 12:12:00.000000', 4, 3, NULL, 3, '1212'),
(19, '2022-12-12 12:12:00.000000', 4, 3, NULL, 3, '1212'),
(20, '2022-12-12 12:12:00.000000', 4, 3, NULL, 3, '1212'),
(21, '2022-12-12 12:12:00.000000', 4, 3, NULL, 3, '1212'),
(22, '2022-12-12 12:12:00.000000', 4, 3, NULL, 3, '1212'),
(23, '2022-12-12 12:12:00.000000', 4, 3, NULL, 3, '1212'),
(24, '2022-12-12 12:12:00.000000', 4, 3, NULL, 3, '1212'),
(25, '2022-12-12 12:12:00.000000', 4, 2, NULL, 1, 'skxjfhsjsa');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `todo_staff`
--

CREATE TABLE `todo_staff` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(254) NOT NULL,
  `password` varchar(20) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `staff_type` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `todo_staff`
--

INSERT INTO `todo_staff` (`id`, `name`, `email`, `password`, `avatar`, `staff_type`) VALUES
(1, 'minh', 'abc@123', '123456', '', 'M'),
(2, 'chu', 'chu@123', '12321', '', 'S');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `todo_table`
--

CREATE TABLE `todo_table` (
  `id` int(11) NOT NULL,
  `status` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `todo_table`
--

INSERT INTO `todo_table` (`id`, `status`) VALUES
(1, '1'),
(2, '1'),
(3, '0');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Chỉ mục cho bảng `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Chỉ mục cho bảng `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Chỉ mục cho bảng `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Chỉ mục cho bảng `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Chỉ mục cho bảng `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Chỉ mục cho bảng `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Chỉ mục cho bảng `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Chỉ mục cho bảng `todo_category`
--
ALTER TABLE `todo_category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `todo_foods`
--
ALTER TABLE `todo_foods`
  ADD PRIMARY KEY (`id`),
  ADD KEY `todo_foods_category_id_id_4fdd5367_fk_todo_category_id` (`category_id_id`);

--
-- Chỉ mục cho bảng `todo_food_order`
--
ALTER TABLE `todo_food_order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `todo_food_order_food_id_id_d3a00f2d_fk_todo_foods_id` (`food_id_id`),
  ADD KEY `todo_food_order_order_id_id_227ad983_fk_todo_order_id` (`order_id_id`);

--
-- Chỉ mục cho bảng `todo_order`
--
ALTER TABLE `todo_order`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `todo_reservation`
--
ALTER TABLE `todo_reservation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `todo_reservation_staff_name_id_275b539e_fk_todo_staff_id` (`staff_name_id`),
  ADD KEY `todo_reservation_table_id_id_3de7a22e_fk_todo_table_id` (`table_id_id`);

--
-- Chỉ mục cho bảng `todo_staff`
--
ALTER TABLE `todo_staff`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `todo_table`
--
ALTER TABLE `todo_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT cho bảng `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT cho bảng `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT cho bảng `todo_category`
--
ALTER TABLE `todo_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `todo_foods`
--
ALTER TABLE `todo_foods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT cho bảng `todo_food_order`
--
ALTER TABLE `todo_food_order`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT cho bảng `todo_order`
--
ALTER TABLE `todo_order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `todo_reservation`
--
ALTER TABLE `todo_reservation`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT cho bảng `todo_staff`
--
ALTER TABLE `todo_staff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `todo_table`
--
ALTER TABLE `todo_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Các ràng buộc cho bảng `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Các ràng buộc cho bảng `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Các ràng buộc cho bảng `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Các ràng buộc cho bảng `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Các ràng buộc cho bảng `todo_foods`
--
ALTER TABLE `todo_foods`
  ADD CONSTRAINT `todo_foods_category_id_id_4fdd5367_fk_todo_category_id` FOREIGN KEY (`category_id_id`) REFERENCES `todo_category` (`id`);

--
-- Các ràng buộc cho bảng `todo_food_order`
--
ALTER TABLE `todo_food_order`
  ADD CONSTRAINT `todo_food_order_food_id_id_d3a00f2d_fk_todo_foods_id` FOREIGN KEY (`food_id_id`) REFERENCES `todo_foods` (`id`),
  ADD CONSTRAINT `todo_food_order_order_id_id_227ad983_fk_todo_order_id` FOREIGN KEY (`order_id_id`) REFERENCES `todo_order` (`id`);

--
-- Các ràng buộc cho bảng `todo_reservation`
--
ALTER TABLE `todo_reservation`
  ADD CONSTRAINT `todo_reservation_staff_name_id_275b539e_fk_todo_staff_id` FOREIGN KEY (`staff_name_id`) REFERENCES `todo_staff` (`id`),
  ADD CONSTRAINT `todo_reservation_table_id_id_3de7a22e_fk_todo_table_id` FOREIGN KEY (`table_id_id`) REFERENCES `todo_table` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
