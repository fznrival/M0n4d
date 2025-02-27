require("colors");

function displayHeader() {
  process.stdout.write("\x1Bc"); 

  console.log(`
%c __  __       _            
%c|  \\/  |     (_)           
%c| \\  / | __ _ _ _ __   ___ 
%c| |\\/| |/ _\` | | '_ \\ / _ \\
%c| |  | | (_| | | | | |  __/
%c|_|  |_|__,|_|_| |_|___|

%c--------------------------------------
%c      Monad Testnet Script
%c--------------------------------------
%cAuthor: fznrival
%cGitHub: https://github.com/fznrival
%cProject: Monad
%cCreated: 2025
%c--------------------------------------
`,
  'color: #00ff00;', // Hijau untuk baris 1 ASCII
  'color: #00ff00;', // Hijau untuk baris 2 ASCII
  'color: #00ff00;', // Hijau untuk baris 3 ASCII
  'color: #00ff00;', // Hijau untuk baris 4 ASCII
  'color: #00ff00;', // Hijau untuk baris 5 ASCII
  'color: #00ff00;', // Hijau untuk baris 6 ASCII
  'color: #ffcc00;', // Kuning untuk garis pembatas atas
  'color: #ffffff;', // Putih untuk judul
  'color: #ffcc00;', // Kuning untuk garis pembatas tengah
  'color: #cyan;',    // Cyan untuk Author
  'color: #cyan;',    // Cyan untuk GitHub
  'color: #cyan;',    // Cyan untuk Project
  'color: #cyan;',    // Cyan untuk Created
  'color: #ffcc00;'  // Kuning untuk garis pembatas bawah
);
}

module.exports = displayHeader;
