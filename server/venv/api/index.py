from server import app as application

def handler(request, response):
    with application.request_context(request.environ):
        return application.full_dispatch_request()