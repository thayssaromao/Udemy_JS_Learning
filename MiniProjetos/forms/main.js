class ValidaForms{
    constructor(){
        this.formulario = document.querySelector('.formulario')

        this.eventos()
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e){
        e.preventDefault()
        console.log('formulário não enviado...')

        const validsCamps = this.isCampsValid()
        const validsPasswords = this.isPasswordValid()

        if(validsCamps && validsPasswords){
            alert('Formulário Enviado')
            this.formulario.submit()
        }
    }

    isCampsValid(){
        let valid = true

        for(let error of this.formulario.querySelectorAll('.error-text')){
            error.remove()
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerHTML
            if(!campo.value){
                this.createError(campo,`Campo "${label}" não pode estar em branco`)
                valid = false
            }
            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false
            }

            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false
            }
        }
        return valid
    }

    isPasswordValid(){
        let valid = true

        const password = this.formulario.querySelector('.senha')
        const repitPass = this.formulario.querySelector('.repetir-senha')

            if(password.value !== repitPass.value ){
                valid = false
                this.createError(repitPass, 'Senha precisa ser igual')
            }

            if(password.value.length < 6 || password.value.length >12){
                valid = false
                this.createError(password, 'Senha precisa ter de 6 a 12 caracteres')
            }
        return valid
    }


    validaCPF(campo){
        const cpf = new ValidaCpf(campo.value)
        if(!cpf.valida()){
            this.createError(campo,'cpf inválido')
            return false
        }
        return true
    }

    validaUsuario(campo){
        const usuario = campo.value
        let valid = true

        if(usuario.length < 3|| usuario.length > 12){
        this.createError(campo,'Usuário inválido')
        valid =  false
        }

        if(!usuario.match(/[a-zA-Z0-9]/)){
            console.log('chegou aqui')
            this.createError(campo,'Usuário deve conter apenas letras e números')
            valid =  false
            }

        return valid
    }

    

    createError(campo, message){
        const div = document.createElement('div')
        div.innerHTML = message
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }


}


const valida = new ValidaForms()

const cpf = new ValidaCpf('111.111.111-11')
console.log(cpf.valida())