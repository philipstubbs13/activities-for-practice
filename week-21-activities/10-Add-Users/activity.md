* In users/templates/users/add.html, add form.
<form method="post" action="{% url 'users:add' %}">
    {% csrf_token %}
    <div class="form-group">
        <label for="first-name">First Name</label>
        <input class="form-control" type="text" name="first-name" placeholder="First Name">
    </div>
    <div class="form-group">
        <label for="last-name">Last Name</label>
        <input class="form-control" type="text" name="last-name" placeholder="Last Name">
    </div>
    <div class="form-group">
        <label for="email">Email</label>
        <input class="form-control" type="text" name="email" placeholder="email@test.com">
    </div>
    <div class="form-group">
        <label for="age">Age</label>
        <input class="form-control" type="number" name="age" placeholder="age">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>

* In views.py
    def add (request):

        # if request.method === 'GET'
        request_type = request.method
        # context = {'header' : 'This is the add view!'}
        context = { 'header' : 'request_type: {}'.format)}

            return render(request, 'users/add.html', context)

        elif request.method === 'POST'
            first_name = request.POST['first-name']

            return render....