-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 02 Des 2023 pada 23.50
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `assesment`
--

CREATE TABLE `assesment` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `type_assesment` varchar(255) NOT NULL,
  `value_assesment` varchar(255) NOT NULL,
  `result` text NOT NULL,
  `userId` int(11) NOT NULL,
  `roomId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `assesment`
--

INSERT INTO `assesment` (`id`, `uuid`, `type_assesment`, `value_assesment`, `result`, `userId`, `roomId`, `createdAt`, `updatedAt`) VALUES
(2, '27ce5e88-ff9a-454b-846c-8d27a8409b6d', 'Gambar', 'Mental Parah', 'Harap menghubungi psikiater', 3, NULL, '2023-12-02 21:16:25', '2023-12-02 21:16:25'),
(3, '6a987e8c-334b-426c-abdd-32f065e3e046', 'Gambar', 'Sedih Akut', 'Harap menghubungi psikiater', 2, NULL, '2023-12-02 21:16:54', '2023-12-02 21:16:54'),
(4, '98f76930-869f-486f-bc28-22c46cd989d0', 'Form', 'Tempramental', 'Harap menghubungi psikiater', 2, NULL, '2023-12-02 21:17:39', '2023-12-02 21:17:39');

-- --------------------------------------------------------

--
-- Struktur dari tabel `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `postingId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `posting`
--

CREATE TABLE `posting` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `posting` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `sessions`
--

INSERT INTO `sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('oPAANrb4WAk2FMpuk6pOgMYMKY25uYoc', '2023-12-03 21:43:40', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"b06cd74e-8694-4209-9602-10b756d3e837\"}', '2023-12-02 21:05:08', '2023-12-02 21:43:40');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `uuid`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, '970ac729-193a-4ea2-8882-b1529530582e', 'RoyhanUpdated', '123001@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$j7raOGyJ+BQ+PBeedm/6yQ$nO1p8pBo79SJ8KpHYyKq0VmipLeG9qBS4PeQHL3W9+Q', 'user', '2023-12-02 20:13:58', '2023-12-02 20:59:38'),
(2, '0967d901-cef4-486e-a803-b5e1b14ee5e4', 'cuy', 'cuy@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$f9JEgjNhvKu3xAJaCAdDYQ$bQFcJ6rQb1LHYiS2jJMLz+EBjyfPdujqq+GS1fztvBo', 'user', '2023-12-02 20:14:33', '2023-12-02 20:14:33'),
(3, '5e3cbede-8340-43dd-9cc6-6c63808bd511', 'boy', 'boy@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$bUr5eKmP8UkffulQKv/4GQ$2IFZ+ckaMPcNJhq4fR90FPUB0XKE3R3EhgpVzkMGR0A', 'user', '2023-12-02 20:57:04', '2023-12-02 20:57:04'),
(4, 'b06cd74e-8694-4209-9602-10b756d3e837', 'woy', 'woy@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$nUEcU4fEoBfZ+4Gu+X1wXQ$XfOtNO+KUwUPsrlKagUroTk/ZMZMs+cEh6bL1r6ZJ+c', 'admin', '2023-12-02 21:19:26', '2023-12-02 21:19:26');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `assesment`
--
ALTER TABLE `assesment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `postingId` (`postingId`);

--
-- Indeks untuk tabel `posting`
--
ALTER TABLE `posting`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `assesment`
--
ALTER TABLE `assesment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `posting`
--
ALTER TABLE `posting`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `assesment`
--
ALTER TABLE `assesment`
  ADD CONSTRAINT `assesment_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`postingId`) REFERENCES `posting` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `posting`
--
ALTER TABLE `posting`
  ADD CONSTRAINT `posting_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
