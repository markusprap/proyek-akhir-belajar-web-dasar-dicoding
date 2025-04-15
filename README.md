# Submission: Tugas Akhir Membuat Website

Berikut kriteria-kriteria wajib submission yang harus Anda penuhi.

* Terdapat elemen &lt<header>&gt, &lt<footer>&gt, &lt<main>&gt, &lt<article>&gt, dan &lt<aside>&gt di berkas HTML.
* Masing-masing elemen wajib berisi konten yang peruntukkannya sesuai dengan elemen tersebut (menerapkan konsep semantic HTML dalam menyusun struktur website).
  Contohnya:
   * Tidak terdapat duplikasi elemen &lt<main>&gt&gt.
   * Elemen &lt<main>&gt harus berada diantara &lt<header>&gt dan &lt<footer>&gt.
   * Harus terdapat elemen &lt<header>&gt sebelum &lt<main>&gt dan &lt<footer>&gt sesudah &lt<main>&gt.
   * Jika terdapat elemen &lt<header>&gt atau &lt<footer>&gt di dalam elemen &lt<article>&gt atau &lt<aside>&gt, maka hal tersebut diperbolehkan.
* Wajib menampilkan menampilkan foto di elemen &lt<aside>&gt. Anda boleh menampilkan foto diri Anda sekaligus menampilkan biodata lainnya atau Anda juga bisa menampilkan foto yang relevan dengan konten yang Anda tulis.
* Menyusun layout menggunakan flexbox, bukan float.
* Tema yang ditampilkan bebas, kecuali tema Bandung.
* Semakin detail dan lengkap website Anda maka nilai submission akan makin tinggi.

Berikut adalah sketsa dari struktur website yang dapat dijadikan referensi untuk mengerjakan submission. tetapi tidak kami diwajibkan.

![image](https://github.com/user-attachments/assets/a4bf2128-4b82-49ec-87d8-638284bba5ee)


Tips:
1. Ketika melakukan import suatu resource pada file HTML, pastikan untuk menggunakan relative path, bukanabsolute path. Hal ini karena berpotensi menyebabkan resource tersebut tidak dapat dibaca ketika direviu. Berikut adalah contohnya.
Absolute path: "C:\Users\Documents\Projects\styles\style.css" atau "/home/user/Projects/styles/style.css"
Relative path: "styles/style.css"

2. Masih dalam topik yang sama mengenai asset/resource, pastikan dalam penulisan nama file atau folder sama persis dengan keadaan sebenarnya. Misalnya jika ada gambar dengan nama profile.jpg pada folder proyek, Anda harus import ia dengan nama profile.jpg, bukan Profile.jpg. Hal ini bertujuan agar beberapa file tersebut bisa dimuat dengan baik oleh browser pada beberapa Sistem Operasi, seperti Linux.

3. Agar memudahkan Anda dalam membuat submission, gunakanlah IDE (Integrated Development Environtment) yang mendukung produktivitas dalam menuliskan kode. Misalnya Atom, VSCode, atau lainnya.
