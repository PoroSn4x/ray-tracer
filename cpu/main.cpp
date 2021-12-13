#include <iostream>
#include "glad/glad.h"
#include "GLFW/glfw3.h"
#include "primitives/shape.h"

void tick();

GLFWwindow* window;

int main()
{	
	if (!glfwInit())
	{
		return -1;
	}
	window = glfwCreateWindow(640, 480, "My Title", NULL, NULL);

	if (!window)
	{
		glfwTerminate();
		return -1;
	}
	glfwMakeContextCurrent(window);

	if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))
	{
		// FAILED to load opengl context
	}

	while (!glfwWindowShouldClose(window))
	{
		tick();
	}

	glfwTerminate();

	return 0;
}

void render(GLFWwindow* w)
{
	glClear(GL_COLOR_BUFFER_BIT);
}

void tick()
{
	// Render the screen here to the back buffer
	render(window);

	// Swap the buffers
	glfwSwapBuffers(window);
	glfwPollEvents();
}

