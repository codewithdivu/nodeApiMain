#include <iostream>

class AbstractClass
{
public:
    // Pure virtual function
    virtual void pureVirtualFunction() = 0;

    // Regular virtual function with implementation
    virtual void regularVirtualFunction()
    {
        std::cout << "Regular virtual function" << std::endl;
    }
};

class ConcreteClass : public AbstractClass
{
public:
    // Override pure virtual function
    void pureVirtualFunction() override
    {
        std::cout << "Concrete class implements pure virtual function" << std::endl;
    }
    void regularVirtualFunction() override
    {
        std::cout << "derived regular virtual function" << std::endl;
    }
};

int main()
{
    // AbstractClass abstractObject; // Error: Cannot instantiate abstract class

    ConcreteClass concreteObject;
    concreteObject.pureVirtualFunction();    // Output: Concrete class implements pure virtual function
    concreteObject.regularVirtualFunction(); // Output: Regular virtual function

    AbstractClass *ptr = &concreteObject;
    ptr->pureVirtualFunction();    // Output: Concrete class implements pure virtual function
    ptr->regularVirtualFunction(); // Output: Regular virtual function

    return 0;
}
