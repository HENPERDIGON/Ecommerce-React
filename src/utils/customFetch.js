
        import Productos from "./Productos";

        const customFetch = (time) => {
            return new Promise ((resolve, reject) =>{



                setTimeout(() => {
                    if(true) {
                        resolve(Productos)
                    }else {
                        reject("error")

            }

        }, time)})}

        export default customFetch; 