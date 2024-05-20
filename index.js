          document.addEventListener('DOMContentLoaded', function() {
                document.querySelector('form').addEventListener('submit', function(e) {

                    let name = document.querySelector('#name').value;

                    if (name) {
                        alert('hello, ' + name);
                    } else {
                        alert('hello, whoever you are');
                    }

                    e.preventDefault();
                });
            });
