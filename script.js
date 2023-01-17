class Kostka {

    constructor() {
        this.front_side = new Strana([["G", "G", "G"], ["G", "G", "G"], ["G", "G", "G"]]);
        this.left_side = new Strana([["O", "O", "O"], ["O", "O", "O"], ["O", "O", "O"]]);
        this.right_side = new Strana([["R", "R", "R"], ["R", "R", "R"], ["R", "R", "R"]]);
        this.upper_side = new Strana([["W", "W", "W"], ["W", "W", "W"], ["W", "W", "W"]]);
        this.down_side = new Strana([["Y", "Y", "Y"], ["Y", "Y", "Y"], ["Y", "Y", "Y"]]);
        this.back_side = new Strana([["B", "B", "B"], ["B", "B", "B"], ["B", "B", "B"]]);
        this.render();
    };

    frontTurn(prime = false) {
        let left_side_right_column = this.left_side.getRightColumn()
        let upper_side_lower_row = this.upper_side.getLowerRow()
        let right_side_left_column = this.right_side.getLeftColumn()
        let down_side_upper_row = this.down_side.getUpperRow()
        this.front_side.rotate(!prime);
        if (prime) {
            this.down_side.setUpperRow(left_side_right_column);
            this.left_side.setRightColumn(upper_side_lower_row);
            this.upper_side.setLowerRow(right_side_left_column);
            this.right_side.setLeftColumn(down_side_upper_row);
        } else {
            this.down_side.setUpperRow(right_side_left_column);
            this.left_side.setRightColumn(down_side_upper_row);
            this.upper_side.setLowerRow(left_side_right_column);
            this.right_side.setLeftColumn(upper_side_lower_row);
        }
        this.render();
    };

    rightTurn(prime = false) {
        let upper_side_right_column = this.upper_side.getRightColumn();
        let front_side_right_column = this.front_side.getRightColumn();
        let down_side_right_column = this.down_side.getRightColumn();
        let back_side_left_column = this.back_side.getLeftColumn();
        this.right_side.rotate(!prime);
        if (prime) {
            this.back_side.setLeftColumn(down_side_right_column);
            this.upper_side.setRightColumn(back_side_left_column);
            this.front_side.setRightColumn(upper_side_right_column);
            this.down_side.setRightColumn(front_side_right_column);
        } else {
            this.back_side.setLeftColumn(upper_side_right_column);
            this.upper_side.setRightColumn(front_side_right_column);
            this.front_side.setRightColumn(down_side_right_column);
            this.down_side.setRightColumn(back_side_left_column);
        }
        this.render();
    }

    leftTurn(prime = false) {
        this.left_side.rotate(!prime);
        let down_side_left_column = this.down_side.getLeftColumn();
        let back_side_right_column = this.back_side.getRightColumn();
        let upper_side_left_column = this.upper_side.getLeftColumn();
        let front_side_left_column = this.front_side.getLeftColumn();
        if (prime) {
            this.front_side.setLeftColumn(down_side_left_column)
            this.down_side.setLeftColumn(back_side_right_column)
            this.back_side.setRightColumn(upper_side_left_column)
            this.upper_side.setLeftColumn(front_side_left_column)
        } else {
            this.front_side.setLeftColumn(upper_side_left_column)
            this.down_side.setLeftColumn(front_side_left_column)
            this.back_side.setRightColumn(down_side_left_column)
            this.upper_side.setLeftColumn(back_side_right_column)
        }
        this.render();
    }

    upperTurn(prime = false) {
        this.upper_side.rotate(!prime);
        let front_side_upper_row = this.front_side.getUpperRow()
        let left_side_upper_row = this.left_side.getUpperRow()
        let back_side_upper_row = this.back_side.getUpperRow()
        let right_side_upper_row = this.right_side.getUpperRow()
        if (prime) {
            this.front_side.setUpperRow(left_side_upper_row)
            this.left_side.setUpperRow(back_side_upper_row)
            this.back_side.setUpperRow(right_side_upper_row)
            this.right_side.setUpperRow(front_side_upper_row)
        } else {
            this.front_side.setUpperRow(right_side_upper_row)
            this.left_side.setUpperRow(front_side_upper_row)
            this.back_side.setUpperRow(left_side_upper_row)
            this.right_side.setUpperRow(back_side_upper_row)
        }
        this.render();
    }

    downTurn(prime = false) {
        this.down_side.rotate(!prime);
        let front_side_lower_row = this.front_side.getLowerRow()
        let right_side_lower_row = this.right_side.getLowerRow()
        let back_side_lower_row = this.back_side.getLowerRow()
        let left_side_lower_row = this.left_side.getLowerRow()
        if (prime) {
            this.front_side.setLowerRow(right_side_lower_row)
            this.right_side.setLowerRow(back_side_lower_row)
            this.back_side.setLowerRow(left_side_lower_row)
            this.left_side.setLowerRow(front_side_lower_row)
        } else {
            this.front_side.setLowerRow(left_side_lower_row)
            this.right_side.setLowerRow(front_side_lower_row)
            this.back_side.setLowerRow(right_side_lower_row)
            this.left_side.setLowerRow(back_side_lower_row)
        }
        this.render();
    }

    render() {
        let placeholder = document.querySelector("#placeholder")
        placeholder.innerHTML = "";
        let front_table = document.createElement("div")
        front_table.classList.add("table")
        front_table = this.populateTableWithElements(front_table, this.front_side)
        let left_table = document.createElement("div")
        left_table.classList.add("table")
        left_table = this.populateTableWithElements(left_table, this.left_side)
        let right_table = document.createElement("div")
        right_table.classList.add("table")
        right_table = this.populateTableWithElements(right_table, this.right_side)
        let back_table = document.createElement("div")
        back_table.classList.add("table")
        back_table = this.populateTableWithElements(back_table, this.back_side)
        let down_table = document.createElement("div")
        down_table.classList.add("table")
        down_table = this.populateTableWithElements(down_table, this.down_side)
        let upper_table = document.createElement("div")
        upper_table.classList.add("table")
        upper_table = this.populateTableWithElements(upper_table, this.upper_side)
        placeholder.append(document.createElement("div"), upper_table, document.createElement("div"), document.createElement("div"), left_table, front_table, right_table, back_table, document.createElement("div"), down_table, document.createElement("div"), document.createElement("div"))
    }

    populateTableWithElements(element, array) {

        array.getMatrix().forEach((row) => {
            let row_element = document.createElement("div")
            row.forEach((item) => {
                let item_element = document.createElement("div")
                item_element.classList.add(item)
                item_element.classList.add("policko")
                row_element.append(item_element)
            })
            element.append(row_element)
        })
        return element;
    }
}

class Strana {
    constructor(matrix) {
        this.setMatrix(matrix);
    };

    getMatrix() {
        return this.matrix;
    };

    setMatrix(matrix) {
        this.matrix = matrix;
    };

    getUpperRow() {
        return [this.matrix[0][0], this.matrix[0][1], this.matrix[0][2]];
    };

    setUpperRow(row) {
        this.matrix[0][0] = row[0];
        this.matrix[0][1] = row[1];
        this.matrix[0][2] = row[2];
    };

    getLowerRow() {
        return [this.matrix[2][0], this.matrix[2][1], this.matrix[2][2]];
    };

    setLowerRow(row) {
        this.matrix[2][0] = row[0];
        this.matrix[2][1] = row[1];
        this.matrix[2][2] = row[2];
    };

    getLeftColumn() {
        return [this.matrix[0][0], this.matrix[1][0], this.matrix[2][0]];
    };

    setLeftColumn(column) {
        this.matrix[0][0] = column[0];
        this.matrix[1][0] = column[1];
        this.matrix[2][0] = column[2];
    };

    getRightColumn() {
        return [this.matrix[0][2], this.matrix[1][2], this.matrix[2][2]];
    };

    setRightColumn(column) {
        this.matrix[0][2] = column[0];
        this.matrix[1][2] = column[1];
        this.matrix[2][2] = column[2];
    };

    rotate(clockwise = true) {
        let old_matrix = this.getMatrix();
        let new_matrix;
        if (clockwise) {
            new_matrix = [[old_matrix[2][0], old_matrix[1][0], old_matrix[0][0]], [old_matrix[2][1], old_matrix[1][1], old_matrix[0][1]], [old_matrix[2][2], old_matrix[1][2], old_matrix[0][2]]];
        } else {
            new_matrix = [[old_matrix[0][2], old_matrix[1][2], old_matrix[2][2]], [old_matrix[0][1], old_matrix[1][1], old_matrix[2][1]], [old_matrix[0][0], old_matrix[1][0], old_matrix[2][0]]];
        }
        this.setMatrix(new_matrix);
    };
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let kostkaObj = new Kostka();
let front_button = document.getElementById("front-turn-button")
front_button.addEventListener("click", () => {
    kostkaObj.frontTurn()
})
let left_button = document.getElementById("left-turn-button")
left_button.addEventListener("click", () => {
    kostkaObj.leftTurn()
})
let right_button = document.getElementById("right-turn-button")
right_button.addEventListener("click", () => {
    kostkaObj.rightTurn()
})
let upper_button = document.getElementById("upper-turn-button")
upper_button.addEventListener("click", () => {
    kostkaObj.upperTurn()
})
let down_button = document.getElementById("down-turn-button")
down_button.addEventListener("click", () => {
    kostkaObj.downTurn()
})

let scramble_button = document.getElementById("scramble-button")
scramble_button.addEventListener("click", () => {
    let possibleMethods = [
        "frontTurn",
        "leftTurn",
        "rightTurn",
        "upperTurn",
        "downTurn"
    ]

    let scrambleMethods = []

    for (let i = 0; i < 25; i++) {
        let random_int = getRandomInt(0, 4)
        scrambleMethods.push(possibleMethods[random_int])
    }

    for (const scrambleMethod of scrambleMethods) {
        kostkaObj[scrambleMethod]()
    }
})
