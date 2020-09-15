var app = new Vue ({
    el:'#app',
    data: {
        table: [
            '', '', '',
            '', '', '',
            '', '', '',
        ],
        activePlayer: 'X',
        finished: false
    },
    methods:{
        // Index reprezinta celula din tabel pe care se face mutarea (0-8)
        makeMove(index){
            // (Guard clause) verificam daca este deja ceva pe acea celula
            if(this.table[index] != '') return;
            // Folosim .splice pentru a permite reactivitatea proprietati .table
            this.table.splice(index, 1, this.activePlayer);
            // this.table[index] = this.activePlayer;
            // Schimbam jucatorul activ:
            this.activePlayer = this.activePlayer == 'X' ? '0' : 'X';
            // Verificam daca s-a terminat jocul:
            this.checkFinished();
        },
        checkFinished(){
            this.checkComplete(this.table.filter((value, index) => index < 3));
            this.checkComplete(this.table.filter((value, index) => index > 2 && index<6));
            this.checkComplete(this.table.filter((value, index) => index > 5));
            this.checkComplete(this.table.filter((value, index) => index % 3 == 0));
            this.checkComplete(this.table.filter((value, index) => index % 3 == 1));
            this.checkComplete(this.table.filter((value, index) => index % 3 == 2));
            this.checkComplete(this.table.filter((value, index) => index % 4 == 0));
            this.checkComplete(this.table.filter((value, index) => [2, 4, 6].includes(index)));
        },
        checkComplete(cells) {
            if (
                cells.every(cell => cell == 'X')
            ||  cells.every(cell => cell == 'O')
            ) {
                this.finished = true;
            }
        }
    }
});