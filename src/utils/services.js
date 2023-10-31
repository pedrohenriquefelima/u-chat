export const baseUrl = "http://localhost:5000/u-chat";

export const postRequest = async(url, body) => {

    try{
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body
        })
        const data = await response.json();

        if(!response.ok) {
            let message;
            if(data?.message) {
                message = data.message;
            } else {
                message = data;
            }
            return {error: true, message};
        }
        return data;

    } catch (error){
        return {error: true, message: error}
    }
   
};

export const getRequest = async(url, body) => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        if(!response.ok){
            let message;
            if(data?.message) {
                message = data.message;
            } else {
                message = data;
            }
            return {error: true, message};
        }
        return data;
        
    } catch (error) {
        return {error: true, message: error} 
    }
}