export function convertBase64(file) {
    if(!file || !(file instanceof File)) {
        return Promise.reject("The argument must be a valid File!");
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    return new Promise((resolve, reject) => {
        fileReader.addEventListener('load', e => {
            resolve(fileReader.result);
        });

        fileReader.addEventListener('error', e => reject("Error converting to Base64"));
    });
}