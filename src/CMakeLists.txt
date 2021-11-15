set(RAY_SRC_LIST
    "main.cpp"
    "primitives/shape.h"
    "primitives/shape.cpp")

add_executable(${EXECUTABLE_NAME} ${RAY_SRC_LIST})

source_group(TREE ${CMAKE_CURRENT_SOURCE_DIR} FILES ${RAY_SRC_LIST})

target_include_directories(${EXECUTABLE_NAME} PUBLIC
                           "${CMAKE_CURRENT_SOURCE_DIR}")