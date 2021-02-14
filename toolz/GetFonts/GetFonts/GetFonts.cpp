#include <iostream>
#include <filesystem>
#include <string>
#include <vector>
#include <shlobj_core.h>

int main()
{
    char path[_MAX_PATH];
    if (SHGetSpecialFolderPathA(nullptr, path, CSIDL_FONTS, 0)) {
        std::vector<std::string> fontNames;

        try {
            for (auto& file : std::filesystem::directory_iterator(path)) {
                if (file.path().extension() == ".ttf")
                    fontNames.push_back(file.path().filename().string());
            }
        }
        catch (std::filesystem::filesystem_error err) {
            std::cerr << err.what() << std::endl;
            return 1;
        }

        std::string arrayString{ "[" };
        int index{0};
        for (auto it = fontNames.begin(); it != fontNames.end(); ++it, ++index)
        {
            if (*it != fontNames.back()) {
                arrayString += "\""+ *it + "\",";
            }
            else
                arrayString += "\"" + *it + "\"]";
        }
        std::cout << arrayString;
    }   
    else {
        std::cerr << "SHGetSpecialFolderPathA failed" << std::endl;
        return 1;
    }
    std::cin.get();
}

