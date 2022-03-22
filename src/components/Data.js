const List = {
    lists : [
        {
            id:1,
            title: 'Complete Online javaScript course',
            active: false
        },
        {
            id:2,
            title: 'Jog around the park 3x',
            active: true
        },
        {
            id:3,
            title: '10 minutes meditation',
            active: true
        },
        {
            id:4,
            title: 'Read for 1 hour',
            active: true
        },
        {
            id:5,
            title: 'Pick up groceries',
            active: true
        },
        {
            id:6,
            title: 'Complete Todo App Frontend Mentor',
            active: true
        }
    ],

    getList: function (){
        return (
            (localStorage.getItem("todoList") &&
                JSON.parse(localStorage.getItem("todoList"))) || this.lists
        );
    },

    saveList: (lists) => {
        localStorage.setItem("todoList", JSON.stringify(lists));
    },
    removeList: () => {
        localStorage.removeItem("todoList")
    }
};

export default List;

